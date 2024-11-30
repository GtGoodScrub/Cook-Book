import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} width={150} />
      <p>Ready in {recipe.readyInMinutes} minutes</p>
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