import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";
import profileReducer from "../features/profile/profileSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    counter2: counterReducer,
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
    search: searchReducer,
  },
});
