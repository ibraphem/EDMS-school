import { getUsers } from "@/services/userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userParams: {
    size: 1000,
    page: 1,
  },
  users: [],
  userLoading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetch",
  async (arg, { getState }) => {
    return getUsers(getState()?.users?.userParams);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePagination: (state, { payload }) => {
      state.userParams.page = payload;
      state.users = null;
    },
  },
  extraReducers: (builder) => {
    /******************************Users************************ */
    builder.addCase(fetchUsers.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.userLoading = false;
      state.users = payload?.length > 0 ? payload : [];
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.userLoading = false;
      state.error = "Error, Failed to load users";
    });
  },
});

export default userSlice.reducer;
export const { updatePagination } = userSlice.actions;
