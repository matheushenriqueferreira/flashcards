import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: 'flashcard',
  initialState: {
    id: '',
    front: '',
    back: '',
  },
  reducers: {
    editCard: (state, payload) => {
      const { id, front, back } = action.payload;
      return { id: id, front: front, back: back };
    },
    deleteCard: (state, payload) => {
      const { id } = action.payload;
      return { id: id }
    }
  }
})

export const { editCard, deleteCard } = flashcardSlice.actions;
export default flashcardSlice.reducer;