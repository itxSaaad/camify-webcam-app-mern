import { createSlice } from '@reduxjs/toolkit';

import { listCaptures } from '../thunks/captureThunks';

const initialState = {
  captureInfo: null,

  captureList: [],
  captureInfoError: null,
  captureListError: null,
  captureInfoSuccess: false,
  captureListSuccess: false,

  loading: false,
};

const captureSlice = createSlice({
  name: 'capture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCaptures.pending, (state) => {
        state.loading = true;
        state.captureInfoSuccess = false;
        state.captureListSuccess = false;
      })
      .addCase(listCaptures.fulfilled, (state, action) => {
        state.loading = false;
        state.captureList = action.payload;
        state.captureListSuccess = true;
      })
      .addCase(listCaptures.rejected, (state, action) => {
        state.loading = false;
        state.captureListError = action.payload;
        state.captureListSuccess = false;
      });
  },
});

export default captureSlice.reducer;
