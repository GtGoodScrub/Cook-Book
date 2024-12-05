import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Detail from "./components/detail";
import About from "./components/about";
import Contact from "./components/contact";
import Whoops404 from "./components/whoops404";
import Footer from "./components/footer";
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

    const fetchRecipeById = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/recipes/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch recipe with ID: ${id}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    };
    fetchData();
    fetchRecipeById();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/detail" element={<Detail />} />
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
