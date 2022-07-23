import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userEmail: '',
    userLogged: 'notLogged'
  },
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      return {userEmail: email, userLogged: 'logged'}
    },
    logout: (state, action) => {
      return {userEmail: '', userLogged: 'notLogged'}
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;