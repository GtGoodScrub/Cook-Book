import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Detail from "./components/detail";
import About from "./components/about";
import Contact from "./components/contact";
import Whoops404 from "./components/whoops404";
import Footer from "./components/footer";
import AddRecipe from "./components/addRecipe"; // Import AddRecipe
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recipes");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.error(`Error fetching recipes: ${err.message}`);
      }
    };
    fetchData();
  }, []);

  // Function to delete recipe
  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/recipes/${recipeId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeId));
      } else {
        console.error("Failed to delete recipe");
      }
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} deleteRecipe={deleteRecipe} />} />
        <Route
          path="/detail/:id"
          element={<Detail recipes={recipes} setRecipes={setRecipes} />} // Pass setRecipes to Detail
        />
        <Route path="/add-recipe" element={<AddRecipe setRecipes={setRecipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactus" element={<Navigate to="/contact" />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
