import { createSlice } from "@reduxjs/toolkit";

//state updating possion

const generalSlice=createSlice({
    name:'user',
   initialState:{
    userDetails:{},
    userRole:'admin'
  },
   reducers:{
    setUserDetails:(state,action)=>{
        state.userDetails={name:'sample'}
    },
    setUserRole:(state,action)=>{
        state.userRole='admin'
    }
    
   }
})

export const {setUserDetails,setUserRole}=generalSlice.actions
export default generalSlice.reducer