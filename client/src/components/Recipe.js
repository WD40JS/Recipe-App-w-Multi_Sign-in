import React from 'react';
import '../App.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return(
<div className='recipe' >
    <h1>{title}</h1>
    <ol>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
            ))}
    </ol>
    <p>Caloric Intake: {calories}</p>
    <img src={image} alt=""/>
</div>
    );
}

export default Recipe;