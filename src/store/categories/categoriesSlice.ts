import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const CATEGORIES_API = 'https://fakestoreapi.com/products/categories'

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<string[]>(CATEGORIES_API)

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface CategoriesState {
  loading: boolean;
  error: null | string;
  categories: null | string[];
}

const initialState = {
  loading: true,
  error: null,
  categories: null,
} as CategoriesState

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCategories.fulfilled, (state, action: PayloadAction<string[]> ) => {
      state.loading = false;
      state.categories = ['all', ...action.payload];
    })
    .addCase(getCategories.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
})

export default categoriesSlice.reducer;
