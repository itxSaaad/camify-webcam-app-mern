import { createSlice } from '@reduxjs/toolkit';

import {
  detailsUser,
  login,
  register,
  updateProfile,
} from '../thunks/userThunks';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  userDetails: localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : null,
  loginError: null,
  registerError: null,
  updateProfileError: null,
  detailsUserError: null,
  loginSuccess: false,
  registerSuccess: false,
  updateProfileSuccess: false,
  detailsUserSuccess: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userDetails');
      state.userInfo = null;
      state.userDetails = null;
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.loginError = null;
        state.loginSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loginSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.registerError = null;
        state.registerSuccess = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registerSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.registerError = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.updateProfileError = null;
        state.updateProfileSuccess = false;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.updateProfileSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.updateProfileError = action.payload;
      })
      .addCase(detailsUser.pending, (state) => {
        state.loading = true;
        state.detailsUserError = null;
        state.detailsUserSuccess = false;
      })
      .addCase(detailsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsUserSuccess = true;
        state.userDetails = action.payload;
        localStorage.setItem('userDetails', JSON.stringify(action.payload));
      })
      .addCase(detailsUser.rejected, (state, action) => {
        state.loading = false;
        state.detailsUserError = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
