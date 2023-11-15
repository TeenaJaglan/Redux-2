import React from 'react'
import {useDispatch} from 'react-redux';
import {remove} from '../redux/cartslice';
export default function List({item}) {
    const dispatch = useDispatch();
    function removeitem(){
        dispatch(remove(item.id));
          }
          
  return (
    <div>
      <div><img src="" alt="img"/></div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>
      <div>{item.price}</div>
      <button  className='bg-green-500  h-auto p-[0.4rem] mr-[0.8rem] rounded-[2px] '  onClick ={removeitem}>Del</button></div>
    </div>
  )
}
