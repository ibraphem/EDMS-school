import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addLoginUser: (state, { payload }) => {
      state.authUser = payload;
    },
    removeUser: (state) => {
      state.authUser = null;
    },
  },
});

export default authSlice.reducer;
export const { removeUser, addLoginUser } = authSlice.actions;
