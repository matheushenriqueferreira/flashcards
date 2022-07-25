import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userEmail: '',
    userLogged: false
  },
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      return {userEmail: email, userLogged: true}
    },
    logout: (state, action) => {
      return {userEmail: '', userLogged: false}
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;