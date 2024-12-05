import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/detail.css";

const Detail = () => {
  const location = useLocation();
  const { recipeId } = location.state || {};

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipeId) {
      const fetchRecipe = async () => {
        try {
          const response = await fetch(`http://localhost:5000/recipes/${recipeId}`);
          if (!response.ok) throw new Error("Failed to fetch recipe details");
          const data = await response.json();
          setRecipe(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchRecipe();
    } else {
      setError("Recipe ID is missing");
      setLoading(false);
    }
  }, [recipeId]);

  if (loading) return <div className="loading">Loading recipe details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!recipe) return <div className="error">Recipe not found</div>;

  const { title, price, rating, image, ingredients, instructions, like } = recipe;

  return (
    <div className="recipe-detail">
      <h1 className="recipe-title">{title}</h1>
      <div className="recipe-header">
        <img className="recipe-image" src={image} alt={title} />
        <div className="recipe-info">
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Likes:</strong> {like ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.amount || ""} {ingredient.unit || ""}
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Detail;
