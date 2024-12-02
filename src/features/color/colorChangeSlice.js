import { createSlice,nanoid } from "@reduxjs/toolkit";

//nanoid generates unique ids
//initial state 

const initialState={
    id:'0-0',
    
}


export const colorSlice=createSlice({
    name:'colorChange',
    initialState,
    reducers:{
        changeColor:(state,action)=>{

        },
    }
})