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
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=929b7c33f54545c99d197907a3e70af1`
          );
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

  if (loading) {
    return <div className="loading">Loading recipe details...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!recipe) {
    return <div className="error">Recipe not found</div>;
  }

  const instructions = recipe.analyzedInstructions?.length > 0 
    ? recipe.analyzedInstructions[0].steps 
    : [];

  const ingredients = recipe.extendedIngredients || [];

  // Recipe summary
  const summary = recipe.summary || "No summary available";
  const diets = recipe.diets?.join(", ") || "N/A";
  const dishTypes = recipe.dishTypes?.join(", ") || "N/A";
  const cuisines = recipe.cuisines?.join(", ") || "N/A";
  const occasions = recipe.occasions?.join(", ") || "N/A";
  const reviewsCount = recipe.reviewsCount || 0;
  const similarRecipes = recipe.similarRecipes || [];
  const nutrition = recipe.nutrition || {};
  const pricePerServing = recipe.pricePerServing?.toFixed(2) || "N/A";
  const spoonacularScore = recipe.spoonacularScore || 0;

  return (
    <div className="recipe-detail">
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="recipe-header">
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
        <div className="recipe-info">
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes</p>
          <p><strong>Price per Serving:</strong> ${pricePerServing}</p>
        </div>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <h3>Instructions</h3>
      {instructions.length > 0 ? (
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available</p>
      )}

      <div className="recipe-summary">
        <h3>Recipe Summary</h3>
        <p>
          <strong>{recipe.title}</strong> is a{" "}
          <strong>{diets}</strong> recipe with{" "}
          <strong>{recipe.servings} servings</strong>. One serving contains{" "}
          <strong>{nutrition.calories} calories</strong>,{" "}
          <strong>{nutrition.protein}g of protein</strong>, and{" "}
          <strong>{nutrition.fat}g of fat</strong>. For{" "}
          <strong>${pricePerServing} per serving</strong>, this recipe covers{" "}
          <strong>{nutrition.vitaminsPercentage}%</strong> of your daily requirements of vitamins and minerals.
        </p>
        <p>
          It works well as a <strong>{dishTypes}</strong>. This recipe is typical of{" "}
          <strong>{cuisines}</strong> cuisine. It is brought to you by{" "}
          <strong>{recipe.sourceName}</strong> and requires ingredients such as{" "}
          <strong>{ingredients.slice(0, 3).map((ingredient) => ingredient.name).join(", ")}</strong>.
        </p>
        <p>
          It will be a hit at your <strong>{occasions}</strong>.{" "}
          {reviewsCount} people were glad they tried this recipe. From preparation
          to the plate, this recipe takes roughly{" "}
          <strong>{recipe.readyInMinutes} minutes</strong>.
        </p>
        <p>
          Overall, this recipe earns a{" "}
          <strong style={{ color: spoonacularScore < 50 ? "red" : "green" }}>
            {spoonacularScore}% spoonacular score
          </strong>.
        </p>
        <p>
          For more similar recipes, check out:
          <ul>
            {similarRecipes.map((similarRecipe, index) => (
              <li key={index}>
                <a
                  href={similarRecipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {similarRecipe.title}
                </a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Detail;
