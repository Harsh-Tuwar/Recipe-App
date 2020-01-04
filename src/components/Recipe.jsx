import React from 'react';
import style from '../recipe.module.css';
import uuid from 'uuid';

const Recipe = ({ title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ing => (
                    <li key={uuid.v1()}>{ing.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.pic} src={image} alt={title} />
        </div>
    );
}

export default Recipe;