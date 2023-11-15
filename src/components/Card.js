import React,{useEffect, useState} from 'react';
import {add,remove} from '../redux/cartslice.js';
import { functionslice } from '../redux/cartslice';
import {useSelector,useDispatch} from 'react-redux';
import { initialState } from '../redux/cartslice.js';
export default function Card({item}) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cartslice);
// const value=[];
  const [title,settitle] = useState(""); 
  const [description,setdescription] = useState("");

  useEffect(()=>{if(item.title.length>8){ settitle(item.title.slice(0,20)+"...");}
  if(item.description.length>15){setdescription(item.description.slice(0,85)+"...");}},[]);

  function additem(){
    dispatch(add(item));
  }
  function removeitem(){
dispatch(remove(item.id));
  }
  return (
    <div className='card bg-white border-[1px] rounded-[5px] border-shadow-[2px] border-black flex flex-col justify-center items-center w-[280px] h-[400px] mb-[2rem] justify-center'>
      <div className='px-[1rem]  h-auto my-[0.5rem]  w-full flex flex-col justify-center pb-[1rem] '>
      <div className='font-bold'>{title}</div>
      <div>{description}</div>
      </div>
      <div className='image w-full flex  justify-center  h-[200px]'>
        <img src={item.image} width="200px"   className='image py-[1rem] h-[200px]'/></div>
        <div className='flex flex-row mx-[1rem] items-center justify-between  w-full'>
      <div className='mx-[1rem] font-[2rem]'>${item.price}</div>
      <div>
         {
        value.some((p)=>p.id===item.id)?(<div><button onClick={()=>{removeitem()}} className='bg-green-500 mr-[0.8rem] h-auto p-[0.4rem] rounded-[2px] '>Remove from cart</button></div>):(<div><button className='bg-green-500  h-auto p-[0.4rem] mr-[0.8rem] rounded-[2px] ' onClick={()=>{additem()}}>Add to cart</button></div>)
        } 
      </div></div>
      </div>
  )
}
