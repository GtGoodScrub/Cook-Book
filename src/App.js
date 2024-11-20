import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route, Navigate} from 'react-router-dom'

import React, { useState, useEffect } from "react";
import "./App.css";

import Home from './components/home';
import Recipe from './components/recipe';
//import Detail from './components/detail';
import About from './components/about';
import Contact from './components/contact';
import Whoops404 from './components/whoops404';

//function log(s){console.log(s)};

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Recipe/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* Redirecting */}
        <Route path="/contactus" element={<Navigate to="/contact"/>}/>

        {/* Not found */}
        <Route path="*" element={<Whoops404/>}/>

      </Routes>

    </div>
  );
}

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

export default App;
