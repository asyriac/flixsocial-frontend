import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, login, register } from "../auth/authSlice";

export const profileSlice = createSlice({
  name: "post",
  initialState: {
    user: null,
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
      });
  },
});

export default profileSlice.reducer;
