import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="recipe-list">
        <h1>Recipe List</h1>
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="recipe-card"
              onClick={() =>
                navigate(`/detail`, { state: { recipeId: recipe._id } })
              }
            >
              <h3>{recipe.title}</h3>
              <p>Rating: {recipe.rating}</p>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
