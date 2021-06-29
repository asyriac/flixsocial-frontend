import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, loginUser } from "../../services/auth";

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async () => {
    const { response } = await getCurrentUser();
    if (response.status === 400) return { isLoggedIn: false };
    return { isLoggedIn: true };
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await loginUser({ username, password });
    console.log(response);
    return { isLoggedIn: true };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isLoggedIn: false,
    user: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCurrentUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    [fetchCurrentUser.rejected]: (state) => {
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state) => {
      state.isLoggedIn = true;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
