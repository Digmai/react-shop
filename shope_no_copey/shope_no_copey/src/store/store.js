import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import messageReducer from './../slices/messageSlice'
import comentsSlice from '../slices/comentsSlace'
import productSlice from "../slices/productSlice";


export const store = configureStore({
    reducer:{
        auth: authReducer,
        message: messageReducer,
        comment: comentsSlice,
        product: productSlice,
    }
})