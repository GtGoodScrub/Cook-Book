import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
    const [recipeUrl, setRecipeUrl] = useState("");
    const [recipe, setRecipe] = useState(null);
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/recipe")
            .then(response => setRecipeList(response.data))
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h1>Main</h1>

        <p>This will be a cook book web app</p>
        <p>Due date: Nov.28</p>
        
        {/* <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>

        <h2>Recipe List</h2>
        <div>
            {recipeList.length > 0 ? (
                recipeList.map((recipeItem, index) => (
                <div key={index} style={{ marginTop: "20px" }}>
                    <h3>{recipeItem.name}</h3>
                    {recipeItem.image && (
                    <img
                        src={recipeItem.image}
                        alt={recipeItem.name}
                        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                    />
                    )}
                    <h4>Ingredients</h4>
                    <ul>
                    {recipeItem.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                    </ul>
                    <h4>Instructions</h4>
                    <ol>
                    {recipeItem.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                    </ol>
                    <p>
                    <strong>Prep Time:</strong> {recipeItem.time.prep || "N/A"}
                    </p>
                    <p>
                    <strong>Cook Time:</strong> {recipeItem.time.cook || "N/A"}
                    </p>
                    <p>
                    <strong>Total Time:</strong> {recipeItem.time.total || "N/A"}
                    </p>
                    <p>
                    <strong>Servings:</strong> {recipeItem.servings || "N/A"}
                    </p>
                </div>
                ))
            ) : (
                <p>No recipes available.</p>
            )}
            </div>

            {recipe && (
            <div style={{ marginTop: "20px" }}>
                <h2>{recipe.name}</h2>
                {recipe.image && (
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
                )}
                <h3>Ingredients</h3>
                <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
                <h3>Instructions</h3>
                <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
                </ol>
                <p>
                <strong>Prep Time:</strong> {recipe.time.prep || "N/A"}
                </p>
                <p>
                <strong>Cook Time:</strong> {recipe.time.cook || "N/A"}
                </p>
                <p>
                <strong>Total Time:</strong> {recipe.time.total || "N/A"}
                </p>
                <p>
                <strong>Servings:</strong> {recipe.servings || "N/A"}
                </p>
            </div>
            )}
        </div> */}
    </div>);
}

export default Home;