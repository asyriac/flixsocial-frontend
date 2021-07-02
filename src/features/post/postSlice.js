import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAPI } from "../../services";

export const postNewTweet = createAsyncThunk("post/postNewTweet", async ({ content }) => {
  const response = await postAPI.postNewTweet({ content });
  return {
    newPost: response.data.post,
  };
});

export const fetchTweets = createAsyncThunk("post/fetchTweets", async () => {
  const response = await postAPI.fetchTweets();
  return {
    posts: response.data.posts,
  };
});

export const fetchSingleTweet = createAsyncThunk("post/fetchSingleTweet", async ({ postId }) => {
  const response = await postAPI.fetchSingleTweet(postId);
  return {
    post: response.data,
  };
});

export const likeTweet = createAsyncThunk("post/likeTweet", async (args) => {
  await postAPI.likeTweet(args.id);
});

export const retweetTweet = createAsyncThunk("post/retweetTweet", async (args) => {
  const response = await postAPI.retweetTweet(args.id);
});

export const replyToTweet = createAsyncThunk("post/replyToTweet", async (args) => {
  const response = await postAPI.replyToTweet(args.id, args.replyContent);
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postNewTweet.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload.newPost);
    },
    [fetchTweets.pending]: (state) => {
      state.loading = true;
    },
    [fetchTweets.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
    [fetchTweets.rejected]: (state) => {
      state.loading = false;
    },
    [fetchSingleTweet.fulfilled]: (state, action) => {
      state.post = action.payload.post;
    },
  },
});

export default postSlice.reducer;
