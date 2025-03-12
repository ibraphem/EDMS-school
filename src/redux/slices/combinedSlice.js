import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const combinedSlice = combineReducers({
  auth: authSlice,
});

export default combinedSlice;
