import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";
import profileReducer from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    counter2: counterReducer,
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
  },
});
