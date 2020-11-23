import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "../components/Recipe";

const About = () => {
  const APP_ID = "f404bfb3";
  const APP_KEY = "536238f38bfbfbf911abf4e0b72fd2e5";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

/*class About extends React.Component {
  render () {
    return (
      <div className='p-4 border'>
        <h1 className='display-1 text-center text-white'>About Page!</h1>
        <h1 className='text-center'>Welcome to the about page.</h1>
        <p className='text-center'>You should have to be logged in, in order to view the contents of this page without being immediately redirected.</p>
      </div>
    )
  }
}*/
export default About;
