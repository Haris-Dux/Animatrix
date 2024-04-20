import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D',
  headers: {
    'X-RapidAPI-Key': '75c6a38082msh3da2eade0300266p1154bejsn865b1a19574f',
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
  }
};

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  }
);



const initialState = {
    productData:null,
    loading:false
};

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
  
        // USER LOGIN
        .addCase(getProductsAsync.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getProductsAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.productData = action.payload;
        })

    
    },
  });

  export default productSlice.reducer;