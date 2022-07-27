import { createSlice } from "@reduxjs/toolkit";

export const refreshPageSlice = createSlice({
  name: 'refreshPage',
  initialState: {
    refreshPage: 0
  },
  reducers: {
    refresh: (state, payload) => {
      return { refreshPage:  state.refreshPage + 1}
    }
  }
});

export const { refresh } = refreshPageSlice.actions;
export default refreshPageSlice.reducer;