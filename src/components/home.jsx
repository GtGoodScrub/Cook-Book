import React, { useState, useEffect } from "react";

const Home = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '929b7c33f54545c99d197907a3e70af1'; // Directly include your API key here

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=true`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipeData(data);
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
      <h1>{recipeData.title}</h1>
      <img src={recipeData.image} alt={recipeData.title} height="200" width="200" />
      <p>{recipeData.summary}</p>
      <p><strong>Cooking Time:</strong> {recipeData.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipeData.servings}</p>
      <h3>Nutrition:</h3>
      <ul>
        {recipeData.nutrition.nutrients.map((nutrient) => (
          <li key={nutrient.title}>
            <strong>{nutrient.title}:</strong> {nutrient.amount} {nutrient.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

/* //Junhee's Code
export const Home = ({ recipes }) => {
  return (
    <div>
      <img
        src={require("../images/CookBookLogo.png")}
        height={150}
        width={200}
        alt="Cookbook Logo"
      />
      <h1>Main</h1>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Home; */