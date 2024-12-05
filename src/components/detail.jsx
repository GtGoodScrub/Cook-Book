import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/detail.css";

const Detail = ({ recipes }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const foundRecipe = recipes.find((r) => r._id === id);
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          const response = await fetch(`http://localhost:5000/recipe/${id}`);
          if (!response.ok) throw new Error("Recipe not found");
          const data = await response.json();
          setRecipe(data);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id, recipes, navigate]);

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(`like-${id}`);
    if (storedLikeStatus) {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        like: JSON.parse(storedLikeStatus),
      }));
    }
  }, [id]);

  const toggleLike = () => {
    setRecipe((prevRecipe) => {
      const newLikeStatus = !prevRecipe.like;
      localStorage.setItem(`like-${id}`, JSON.stringify(newLikeStatus));
      return {
        ...prevRecipe,
        like: newLikeStatus,
      };
    });
  };

  if (loading) return <p>Loading recipe details...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  const {
    title = "Unknown Recipe",
    image = "",
    rating = 0,
    ingredients = "",
    instructions = "",
  } = recipe;

  // Split ingredients and instructions by commas
  const ingredientList = ingredients ? ingredients.split(",") : [];
  const instructionList = instructions ? instructions.split(".") : [];

  return (
    <div className="detail-container">
      <h1>{title}</h1>
      <img src={image} alt={title} className="detail-image" />
      <p>Rating: {rating} / 5</p>

      <button className="like-button" onClick={toggleLike}>
        {recipe.like ? "❤️ Liked" : "🤍 Not Liked"}
      </button>

      <h2>Ingredients:</h2>
      <ul>
        {ingredientList.length > 0 ? (
          ingredientList.map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))
        ) : (
          <p>No ingredients available.</p>
        )}
      </ul>

      <h2>Instructions:</h2>
      <ol>
        {instructionList.length > 0 ? (
          instructionList.map((instruction, index) => (
            <li key={index}>{instruction.trim()}</li>
          ))
        ) : (
          <p>No instructions available.</p>
        )}
      </ol>
    </div>
  );
};

export default Detail;
