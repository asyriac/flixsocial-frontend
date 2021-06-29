import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter2: counterReducer,
    auth: authReducer,
  },
});
