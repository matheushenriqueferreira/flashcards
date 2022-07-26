import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    id: '',
    name: '',
    description: '',
    imageUrl: ''
  },
  reducers: {
    editCollection: (state, action) => {
      const { id, name, description, imageUrl } = action.payload;
      return { id: id, name: name, description: description, imageUrl: imageUrl };
    },
    deleteCollection: (state, action) => {
      const { id, imageUrl } = action.payload;
      return { id: id, imageUrl: imageUrl };
    }
  }
})

export const { editCollection, deleteCollection } = collectionSlice.actions;
export default collectionSlice.reducer;