import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import collectionSlice from "./collectionSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    collection: collectionSlice
  },
});