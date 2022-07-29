import { createSlice } from "@reduxjs/toolkit";

export const playSlice = createSlice({
  name: 'play',
  initialState: {
    front: [],
    back: []
  },
  reducers: {
    setFront: (state, action) => {
      const { front } = action.payload;
      state.front.push(front);
    },
    setBack: (state, action) => {
      const { back } = action.payload;
      state.back.push(back);
    },
    cleanState: (state, action) => {
      state.front = [];
      state.back = [];
    }
  }
});

export const { setFront, setBack, cleanState } = playSlice.actions;
export default playSlice.reducer;