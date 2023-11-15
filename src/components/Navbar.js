import React from 'react'
import {NavLink} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import image from './imagelogo.png';
export default function Navbar() {
  return (
    <div className='flex bg-black flex-row text-white mx-[2rem] px-[5rem] justify-between items-center h-[3.2rem] '>


      <NavLink to ="/"><img src={image} alt ="img" className='w-[5rem] h-[2.5rem]'/></NavLink>
      <div className='flex flex-row px-[0.5rem] items-center'>
      <NavLink to ="/"><div className='px-[0.7rem] '>Home</div></NavLink>
      <NavLink to="/Add-to-cart"><div><FaShoppingCart/></div> </NavLink>
      </div>
     
    </div>
  )
}
