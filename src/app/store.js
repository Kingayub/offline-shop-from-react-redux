import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "../features/shopReducer";

export const store = configureStore({
  reducer: shopReducer,
});
