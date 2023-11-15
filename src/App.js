import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AddtoCart from './components/Addtocart.js'
import './App.css';
import {url} from './components/url.js';
import Home from './components/Home.js';
import { Routes,Route} from 'react-router-dom';



function App() {

  const [cart,setcart] =useState([]);
  async function fetchdata(){
    try{
    const response = await fetch(url);
    const data = await response.json();
   
    setcart([...data]);
    console.log(cart);
  }
    catch{
      console.log("error");
      setcart([]);
      
    }
  }; 
  
  useEffect(()=>{
fetchdata();
  },[]);

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home cart ={cart} />}/>
      <Route path="/Add-to-cart" element ={<AddtoCart/>}/>
    </Routes>
    </div>
  );
}

export default App;
