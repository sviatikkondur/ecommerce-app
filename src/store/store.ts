import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    productsSlice,
    categoriesSlice,
    cartSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
