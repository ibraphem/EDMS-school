import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import requestSlice from "./requestSlice";
import userSlice from "./userSlice";

const combinedSlice = combineReducers({
  auth: authSlice,
  request: requestSlice,
  user: userSlice,
});

export default combinedSlice;
