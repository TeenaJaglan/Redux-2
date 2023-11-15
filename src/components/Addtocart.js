import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { NavLink  } from 'react-router-dom';
import List from './List';

import { functionslice} from '../redux/cartslice';
import { initialState } from '../redux/cartslice.js';
export default function Addtocart() {
  const {value} = useSelector((state) => state.cartslice.value);
// const value=[];

  const [totalamount,settotalamount] = useState(0);
  const [totalitems,settotalitems] = useState(0);
console.log("addtocart");
console.log(value.length);
  useEffect(()=>{
    settotalitems(value.length);
    settotalamount(value.reduce((acc,curr)=>acc+curr.price,0));
  },[value]);

  return (
  <div>
  {
    value.length < 1 ?(()=>{ return (<div className='flex flex-col justify-center'>
      <div>No items are selected.</div>
      <NavLink to ="/"><button className='bg-green-500 p-[0.5rem] w-full h-full'>Shop Now</button></NavLink>
      </div>)}):
      (
  
  <div className='flex w-screen'>
    <div className='w-10/12'>
      {
        value.map((item,index)=>{
          return (<div><List item ={item} key={index}/> </div>);
        })
      }
    </div>
    {/*that summary part */}
    <div className='float-right  w-6/12 mr-[2rem] px-[1rem] '>
      <p className='text-[2rem] text-green-500 font-bold'>YOUR CART</p>
      <p className='text-[2rem] text-green-500 font-bold'>SUMMARY</p>
      <div><p>Total items: {totalitems}</p></div>
      <div><p>Total amount:{totalamount}</p></div>
      <div><button className='bg-green-500 p-[0.5rem] w-full h-full'>Checkout now</button></div>
    </div>
    </div>)}
  </div>)
}
