import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchAPI } from "../../services";

export const searchPosts = createAsyncThunk("search/posts", async (query) => {
  const response = await searchAPI.searchPost(query);
  return {
    posts: response.data.posts,
  };
});

export const searchUsers = createAsyncThunk("search/users", async (query) => {
  const response = await searchAPI.searchUsers(query);
  return {
    users: response.data.users,
  };
});

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    posts: [],
    users: [],
  },
  reducers: {},
  extraReducers: {
    [searchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [searchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

export default searchSlice.reducer;
