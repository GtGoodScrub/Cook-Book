import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/home';
import Detail from './components/detail';
import About from './components/about';
import Contact from './components/contact';
import Whoops404 from './components/whoops404';
import Footer from './components/footer';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:5000/api/recipes"
      try {
        const data = await fetch(url);
        const response = await data.json();
        //console.log(response)
        setRecipes(response)
        console.log(recipes)
      }
      catch (err) {
        console.log(`ERROR in FETCHING: ${err}`)
      }
    }

    fetchData();
    return () => {
      // this now gets called when the component unmounts
      //unmunting is the process of removing a component from the DOM.
      //When a component is unmounted, it is no longer part of the app's UI, and its resources are cleaned up to prevent memory leaks.
    };

  }, [])

  // const fetchRecipes = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/recipes");
  //     if (!response.ok) throw new Error("Failed to fetch recipes");
  //     const data = await response.json();
      
  //     // Log the fetched data
  //     console.log("Fetched recipes:", data);
      
  //     // Optionally, set the data in state
  //     setRecipes(data);
  //   } catch (error) {
  //     console.error("Error fetching recipes:", error.message);
  //   }
  // };


  // useEffect(() => {
  //   fetchRecipes();
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/detail" element={<Detail recipes={recipes} />} />
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
