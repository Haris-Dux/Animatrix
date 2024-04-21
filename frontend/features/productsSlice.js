import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const createQueriesUrl = "https://api.jikan.moe/v4/anime";
const getFavouritesUrl = "http://localhost:8080/api/fav/getFavForUser"

// Create product
export const getProductsAsync = createAsyncThunk(
  "product/get",
  async () => {
    try {
      const response = await axios.get(createQueriesUrl);
      return response.data;
    } catch (error) {
      throw new Error(error)
    }
  }
);

const getQueriesUrl = "http://localhost:8080/api/support/getAllSupport"

export const getQueriesAsync = createAsyncThunk(
  "products/getQueries",
  async () => {
    try {
      const response = await axios.post(getQueriesUrl);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  }
);

export const getFavForUserAsync = createAsyncThunk(
  "products/getFav",
  async (userId) => {
    try {
      const response = await axios.post(getFavouritesUrl,userId);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  }
);





const initialState = {
    productData:[],
    Queries:[],
    Fav:[],
    loading:false
};

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
  
       
        .addCase(getProductsAsync.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getProductsAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.productData = action.payload;
        })

        .addCase(getFavForUserAsync.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getFavForUserAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.Fav = action.payload;
        })

         
         .addCase(getQueriesAsync.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getQueriesAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.Queries = action.payload;
        })


    
    },
  });

  export default productSlice.reducer;