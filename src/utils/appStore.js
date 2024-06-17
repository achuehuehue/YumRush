import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import userNameReducer from './userNameSlice'

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        userName:userNameReducer,
    }
})


export default appStore;