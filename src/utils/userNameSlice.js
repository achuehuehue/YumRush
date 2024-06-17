import { createSlice } from "@reduxjs/toolkit";

const userNameSlice=createSlice({
    name:"userName",
    initialState:{
        username:"Default User"
    },
    reducers:{
        addUserName:(state,action)=>{
            state.username=action.payload;
        },
        removeUserName:(state,action)=>{
            state.username="Default User";
        }
    }

})
export const{addUserName,removeUserName}=userNameSlice.actions;
export default userNameSlice.reducer;