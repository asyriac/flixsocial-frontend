import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../../services";
import { fetchCurrentUser, login, register } from "../auth/authSlice";

export const fetchUserTweets = createAsyncThunk("profile/fetchUserTweets", async (userId) => {
  const response = await profileAPI.getUserPosts(userId);
  return {
    posts: response.data.posts,
  };
});

export const followUser = createAsyncThunk("profile/followUser", async (userId) => {
  const response = await profileAPI.followUser(userId);
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(fetchUserTweets.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      });
  },
});

export default profileSlice.reducer;
