import { createSlice } from '@reduxjs/toolkit';

import {
  createCapture,
  getCaptureById,
  updateCaptureById,
  deleteCapture,
  listCaptures,
} from '../thunks/captureThunks';

const initialState = {
  captureInfo: null,
  captureInfoByID: null,
  captureList: [],
  captureInfoError: null,
  captureInfoByIdError: null,
  captureListError: null,
  captureUpdateError: null,
  captureDeleteError: null,
  captureInfoSuccess: false,
  captureInfoByIdSuccess: false,
  captureListSuccess: false,
  captureUpdateSuccess: false,
  captureDeleteSuccess: false,
  loading: false,
};

const captureSlice = createSlice({
  name: 'capture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCapture.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCapture.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfo = action.payload;
        state.captureInfoSuccess = true;
      })
      .addCase(createCapture.rejected, (state, action) => {
        state.loading = false;
        state.captureInfoError = action.payload;
      })
      .addCase(getCaptureById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCaptureById.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfoByID = action.payload;
        state.captureInfoByIdSuccess = true;
      })
      .addCase(getCaptureById.rejected, (state, action) => {
        state.loading = false;
        state.captureInfoByIdError = action.payload;
      })
      .addCase(updateCaptureById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCaptureById.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfo = action.payload;
        state.captureUpdateSuccess = true;
      })
      .addCase(updateCaptureById.rejected, (state, action) => {
        state.loading = false;
        state.captureUpdateError = action.payload;
      })
      .addCase(deleteCapture.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCapture.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfo = action.payload;
        state.captureDeleteSuccess = true;
      })
      .addCase(deleteCapture.rejected, (state, action) => {
        state.loading = false;
        state.captureDeleteError = action.payload;
      })
      .addCase(listCaptures.pending, (state) => {
        state.loading = true;
      })
      .addCase(listCaptures.fulfilled, (state, action) => {
        state.loading = false;
        state.captureList = action.payload;
        state.captureListSuccess = true;
      })
      .addCase(listCaptures.rejected, (state, action) => {
        state.loading = false;
        state.captureListError = action.payload;
      });
  },
});

export default captureSlice.reducer;
