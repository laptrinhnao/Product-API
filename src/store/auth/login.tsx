import api from "...";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initState = {
  user: null,
  accessToken: "",
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (body, { dispatch }) => {
    try {
      const res = await api.post("...", body);
      if (!res.data) return;
      return "...";
    } catch (error) {
      console.log(error);
      dispatch("...");
    }
  }
);

const authReducer = createReducer(initState, (builder) =>
  builder
    .addCase(loginAsync.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    })
);

export default authReducer;
