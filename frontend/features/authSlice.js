import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const signUpUrl = "http://localhost:8080/api/user/signup";
const loginUrl = "http://localhost:8080/api/user/login";
const logoutUrl = "http://localhost:8080/api/user/logout";
const userSessionUrl = "http://localhost:8080/api/user/authUserSessionEverytime";

export const signUserAsync = createAsyncThunk(
  "user/signup",
  async (formData) => {
    try {
      const response = await axios.post(signUpUrl, formData);
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
        console.log(error);
      toast.error(error.response.data.msg);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/login",
  async (formdata) => {
    try {
      const response = await axios.post(loginUrl, formdata);
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return error.response.status;
    }
  }
);

export const logoutUserAsync = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.delete(logoutUrl);
    toast.success(response.data.msg);
  } catch (error) {
    toast.error(error.response.data.msg);
  }
});

export const authUserAsync = createAsyncThunk("user/userSession", async () => {
  try {
    const response = await axios.post(userSessionUrl);
    return response.data;
  } catch (error) {
    console.log(error.response.data.msg);
  }
});


const initialState = {
    User:null,
    loading:false
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
  
        // USER LOGIN
        .addCase(loginUserAsync.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(loginUserAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.User = action.payload;
        })

        //user session
        .addCase(authUserAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(authUserAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.User = action.payload;
        });
    },
  });

  export default authSlice.reducer;