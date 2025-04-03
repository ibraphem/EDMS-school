import { getRequests, getWorkbenchData } from "@/services/requestService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestParams: {
    size: 1000,
    page: 1,
  },
  workbenchParams: {
    size: 1000,
    page: 1,
  },
  workbenchData: [],
  requests: [],
  requestLoading: false,
  workbenchLoading: false,
  error: "",
};

export const fetchRequests = createAsyncThunk(
  "request/fetch",
  async (arg, { getState }) => {
    return getRequests(getState()?.requests?.requestParams);
  }
);

export const fetchWorkbenchData = createAsyncThunk(
  "workbench/fetch",
  async (arg, { getState }) => {
    return getWorkbenchData(getState()?.requests?.workbenchParams);
  }
);

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    updatePagination: (state, { payload }) => {
      state.requestParams.page = payload;
      state.requests = null;
    },
  },
  extraReducers: (builder) => {
    /******************************Requests************************ */
    builder.addCase(fetchRequests.pending, (state) => {
      state.requestLoading = true;
    });
    builder.addCase(fetchRequests.fulfilled, (state, { payload }) => {
      state.requestLoading = false;
      state.requests = payload?.data;
    });
    builder.addCase(fetchRequests.rejected, (state) => {
      state.requestLoading = false;
      state.error = "Error, Failed to load requests";
    });

    /******************************Workbench************************ */

    builder.addCase(fetchWorkbenchData.pending, (state) => {
      state.workbenchLoading = true;
    });
    builder.addCase(fetchWorkbenchData.fulfilled, (state, { payload }) => {
      state.workbenchLoading = false;
      state.workbenchData = payload;
    });
    builder.addCase(fetchWorkbenchData.rejected, (state) => {
      state.workbenchLoading = false;
      state.error = "Error, Failed to load workbenchData";
    });
  },
});

export default requestSlice.reducer;
export const { updatePagination } = requestSlice.actions;
