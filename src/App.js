import './App.css';
import NavBar from './components/NavBar';
import {Routes,Route, Navigate} from 'react-router-dom'
import {Home, About,Events,Products,Contact,Services,History,Locations} from './components/pages'
import Whoops404 from './components/whoops404';
import ProductDetails from './components/productDetails'
import EventDetails from './components/eventDetails'

function log(s){console.log(s)};
//function Log(a, b){console.log(a + " " + b)};

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/about" element={<About/>}>
          <Route path="services" element={<Services/>}/>
          <Route path="history" element={<History/>}/>
          <Route path="locations" element={<Locations/>}/>
        </Route>
        {/* <Route path="/events" element={<Events/>}/> */}
        <Route path="/events" element={<EventDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* Routing paramters product/101 */}
        <Route path="/products/:id/:name?" element={<ProductDetails/>}/>
     
        <Route path="/contact" element={<Contact/>}/>
        {/* Redirecting */}
        <Route path="/contactus" element={<Navigate to="/contact"/>}/>

        {/* Not found */}
        <Route path="*" element={<Whoops404/>}/>

      </Routes>
      
      <h1>Hello There!</h1>
      <p>This will be a cook book web app</p>
      <p>Due date: Nov.28</p>

    </div>
  );
}

export default App;
