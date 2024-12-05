import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addRecipe.css";

const AddRecipe = ({ setRecipes }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      image,
      ingredients,
      instructions,
      rating,
    };

    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        const data = await response.json();
        // Update the state in App.js with the new recipe
        setRecipes((prevRecipes) => [...prevRecipes, data.savedRecipe]);
        // Redirect to home page after adding the recipe
        navigate("/");
      } else {
        console.error("Error adding recipe");
      }
    } catch (err) {
      console.error("Error adding recipe:", err);
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="add-recipe-button">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
