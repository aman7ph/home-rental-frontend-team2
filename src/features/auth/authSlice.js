import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, userData: {} },
  reducers: {
    setUser: (state, action) => {
      const { token, ...userData } = action.payload;
      state.token = token;
      state.userData = userData;
    },
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },

    logOut: (state, action) => {
      state.token = null;
      state.userData = {};
    },
  },
});

export const { setUser, setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const sellectCurrentToken = (state) => state.auth.token;
