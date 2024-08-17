import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";

export const rootReducer = combineReducers({
    auth: authSlice,
    todo: todoSlice,
})