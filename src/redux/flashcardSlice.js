import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: 'flashcard',
  initialState: {
    id: '',
    front: '',
    back: '',
  },
  reducers: {
    editCard: (state, action) => {
      const { id, front, back } = action.payload;
      return { id: id, front: front, back: back };
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      return { id: id }
    }
  }
})

export const { editCard, deleteCard } = flashcardSlice.actions;
export default flashcardSlice.reducer;