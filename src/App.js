import React, { useState, useEffect} from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/home';
//import allRecipes from './services/recipe-data.json';
import Detail from './components/detail';
import About from './components/about';
import Contact from './components/contact';
import Whoops404 from './components/whoops404';
import './App.css';

/* //Junhee's Code for leaving messages
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
} */

//Junhee's Code for fetching recipes
function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch("http://localhost:5000/api/searchRecipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes("pasta"); // Initial query
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
    </div>
  );
}

export default App;

// George's original code before api changes
// function App() {
//   //state
//   const [recipes] = useState(allRecipes);
//   return (
//     <div className="App">
//       <NavBar/>

//       <Routes>
//         <Route path="/" element={<Home recipes={recipes}/>}/>
//         <Route path="/detail" element={<Detail/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         {/* Redirecting */}
//         <Route path="/contactus" element={<Navigate to="/contact"/>}/>

//         {/* Not found */}
//         <Route path="*" element={<Whoops404/>}/>

//       </Routes>

//     </div>
//   );
// }

// export default App;