import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import Recipe from "./recipe"; // Ensure the Recipe component is imported correctly
import "./home.css"; // Add CSS for styling the grid

const Home = ({ recipes }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "929b7c33f54545c99d197907a3e70af1"; // Directly include your API key here
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipeData(data.recipes);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [apiKey]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="recipe-grid">
        {recipeData.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => navigate(`/detail`, { state: { recipeId: recipe.id } })} // Use navigate for routing
          >
            <Recipe key={recipe.id} recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
