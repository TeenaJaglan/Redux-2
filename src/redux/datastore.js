import { configureStore } from "@reduxjs/toolkit";
import { functionslice } from "./cartslice";

 export const  store =configureStore({
    reducer:
    {
        cartslice:functionslice.reducer
    }
});