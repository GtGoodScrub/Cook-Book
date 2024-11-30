import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the state

const Detail = () => {
  const location = useLocation(); // Get the location object
  const { recipeId } = location.state || {}; // Access recipeId from state safely

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If recipeId is not available, we can't fetch the recipe
    if (recipeId) {
      const fetchRecipe = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=929b7c33f54545c99d197907a3e70af1`
          );
          if (!response.ok) throw new Error("Failed to fetch recipe details");
          const data = await response.json();
          setRecipe(data); // Set recipe details if the fetch is successful
          setLoading(false); // Set loading to false after fetching data
        } catch (error) {
          setError(error.message); // Handle error if the fetch fails
          setLoading(false); // Set loading to false even in case of error
        }
      };
      fetchRecipe();
    } else {
      setError("Recipe ID is missing");
      setLoading(false);
    }
  }, [recipeId]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  // Split instructions into steps (assuming each instruction is separated by a newline)
  const instructions = recipe.instructions ? recipe.instructions.split("\n") : [];

  return (
    <div>
      <h1>Recipe Details</h1>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      
      <h3>Instructions</h3>
      {instructions.length > 0 ? (
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      ) : (
        <p>No instructions available</p>
      )}

      {/* You can display other recipe details here */}
    </div>
  );
};

export default Detail;
