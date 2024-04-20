import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../features/authSlice';
import productsSlice from '../features/productsSlice';

export const Store = configureStore({
    reducer:{
        auth:authSlice,
        products:productsSlice
    }
});