import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../types/Product";

const STORE_API = 'https://fakestoreapi.com/products';

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (category: string, thunkApi) => {
    try {
      const apiUrl = category === 'all' ? STORE_API : `${STORE_API}/category/${category}`;
      const response = await axios.get<TProduct[]>(apiUrl);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface ProductsState {
  loading: boolean;
  error: null | string;
  products: null | TProduct[];
}

const initialState = {
  loading: true,
  error: null,
  products: null,
} as ProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action: PayloadAction<TProduct[]> ) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default productsSlice.reducer;
