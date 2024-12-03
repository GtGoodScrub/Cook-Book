import React from 'react';
import '../styles/recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <p>Ready in: {recipe.readyInMinutes} mins</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
};
 
export default Recipe;

/* //George's Code from recipe.jsx for gridview recipe icons

const Recipe = ({recipe}) => {
    return (<div>
            <a href='http://localhost:3000/detail'>
                <img src={require("../images/" + recipe.imageUrl)} alt="Da Recipe" height={200} width={200}/>
                <h3>{recipe.name}</h3>
            </a>
    </div>);
} */