import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = ({ recipes, deleteRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (recipeId) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
    }
  };

  const handleAddRecipe = () => {
    navigate("/add-recipe");
  };

  return (
    <div className="home-container">
      <div className="search-option">
        <input
          type="text"
          placeholder="Search Recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h1 className="recipe-list-title">Recipe List</h1>
      <button className="add-recipe-button" onClick={handleAddRecipe}>
        Add Recipe
      </button>
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="recipe-card"
            onClick={() => navigate(`/detail/${recipe._id}`)}
          >
            <h3>{recipe.title}</h3>
            <p>Rating: {recipe.rating}</p>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recipe._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
