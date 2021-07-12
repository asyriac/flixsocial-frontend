import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
  return { status: response.data.status, newPost: response.data.message };
});

export const replyToTweet = createAsyncThunk("post/replyToTweet", async (args) => {
  const response = await postAPI.replyToTweet(args.id, args.replyContent);
  toast.info("Reply sent.", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return { reply: response.data.post, isUserPost: args.isUserPost };
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
    [fetchSingleTweet.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleTweet.fulfilled]: (state, action) => {
      state.post = action.payload.post;
      state.loading = false;
    },
    [retweetTweet.fulfilled]: (state, action) => {
      if (action.payload.status === 1) state.posts.unshift(action.payload.newPost);
      else state.posts = state.posts.filter((post) => post._id !== action.payload.newPost._id);
    },
    [replyToTweet.fulfilled]: (state, action) => {
      if (action.payload.isUserPost) state.post?.replies?.push(action.payload.reply);
      state.posts.unshift(action.payload.reply);
    },
  },
});

export default postSlice.reducer;
