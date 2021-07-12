import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../services/index";

export const fetchCurrentUser = createAsyncThunk("auth/fetchCurrentUser", async () => {
  const response = await authAPI.getCurrentUser();
  if (response.status === 200)
    return {
      isLoggedIn: true,
      user: response.data.user,
    };
  return { isLoggedIn: false, initialLoading: false };
});

export const login = createAsyncThunk("auth/login", async ({ username, password }) => {
  const response = await authAPI.loginUser({ username, password });
  if (response.status === 200) return { isLoggedIn: true, user: response.data.result };
  return { isLoggedIn: false, serverError: response.data.message };
});

export const register = createAsyncThunk("auth/register", async ({ firstName, lastName, email, username, password }) => {
  const response = await authAPI.registerUser({
    firstName,
    lastName,
    email,
    username,
    password,
  });
  if (response.status === 200) return { isLoggedIn: true, user: response.data.result };
  return { isLoggedIn: false };
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await authAPI.logoutUser();
  if (response.status === 200) return { isLoggedIn: false, user: null };
  return { isLoggedIn: true };
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    initialLoading: true,
    loading: true,
    isLoggedIn: false,
    serverError: null,
  },
  reducers: {
    resetServerError: (state) => {
      state.serverError = null;
    },
  },
  extraReducers: {
    [fetchCurrentUser.pending]: (state) => {
      state.loading = true;
      state.initialLoading = false;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.initialLoading = false;
    },
    [fetchCurrentUser.rejected]: (state) => {
      state.loading = false;
      state.initialLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.serverError = action.payload.serverError;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [register.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.loading = false;
    },
  },
});

export const { resetServerError } = authSlice.actions;

export default authSlice.reducer;
