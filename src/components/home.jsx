import React/* , { useState, useEffect } */ from "react";
//import axios from "axios";
import Recipe from './recipe';

export const Home = (props) => {
    // const [recipeUrl, setRecipeUrl] = useState("");
    // const [recipe, setRecipe] = useState(null);
    // const [recipeList, setRecipeList] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/recipe")
    //         .then(response => setRecipeList(response.data))
    //         .catch(error => console.error("Error fetching recipes:", error));
    // }, []);

    return (<div>
        <img src={require("../images/CookBookLogo.png")} height={150} width={200} alt="cookbooklogo"/>
        <h1>Main</h1>

        <div className="recipe-list">
            {props.recipes.map(recipe => (
            <Recipe
                key={recipe.id}
                recipe={recipe}
            />
        ))}
        </div>
    </div>  );
}

export default Home;