import React,{useContext} from 'react'
import Card from './Card';

export default function Home({cart}) {
const cartdata = [...cart];
console.log("home inside");
console.log(cartdata);
  return (
    <div className='flex flex-row  w-screen flex-wrap justify-center items-center my-[4rem]'>{
     cartdata.map((item)=>{return (<div key={item.id} className='flex flex-row mx-[2rem] '><Card item ={item}/></div>)})
}</div>
  )
}
