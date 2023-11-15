 import { createSlice } from "@reduxjs/toolkit";



 export const functionslice = createSlice({
    name:"cartslice",
    initialState:{value:[]},
    reducers:{
        add :(state,action)=>{
            console.log("slice function is:");
             console.log(state);
            state.push(action.payload);
            console.log(state);},
        remove :(state,action)=>{
            return state.filter((item)=>item.id!=action.payload);
        }
    }
 })

 export const  {add,remove,initialState} = functionslice.actions;
 export default functionslice.reducer;
