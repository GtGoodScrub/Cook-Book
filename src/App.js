import React, { useState, useEffect} from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/home';
import Detail from './components/detail';
import About from './components/about';
import Contact from './components/contact';
import Whoops404 from './components/whoops404';
import Footer from './components/footer';
import './App.css';

// Junhee's Code for fetching recipes
function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=85874eedcd694c1fbf2bd9297e48b0b2&number=50"
      );
  
      if (!response.ok) throw new Error("Failed to fetch recipes");
  
      const data = await response.json();
      setRecipes(data.recipes); // Adjust to use `data.recipes` based on API response format
    } catch (error) {
      console.error(error.message);
    }
  };
  
  useEffect(() => {
    fetchRecipes(); // Fetch recipes on component mount
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