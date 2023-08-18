import { createSlice } from '@reduxjs/toolkit';

import {
  createCapture,
  deleteAllCaptures,
  deleteCaptureById,
  getCaptureById,
  listCaptures,
  updateCaptureById,
} from '../thunks/captureThunks';

const initialState = {
  captureInfo: null,
  captureInfoById: null,
  captureList: [],
  captureInfoError: null,
  captureInfoByIdError: null,
  captureListError: null,
  captureUpdateError: null,
  captureDeleteByIdError: null,
  captureDeleteAllError: null,
  captureInfoSuccess: false,
  captureInfoByIdSuccess: false,
  captureListSuccess: false,
  captureUpdateSuccess: false,
  captureDeleteByIdSuccess: false,
  captureDeleteAllSuccess: false,
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
        state.captureInfoById = action.payload;
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
      .addCase(deleteCaptureById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCaptureById.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfo = action.payload;
        state.captureDeleteByIdSuccess = true;
      })
      .addCase(deleteCaptureById.rejected, (state, action) => {
        state.loading = false;
        state.captureDeleteByIdError = action.payload;
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
      })
      .addCase(deleteAllCaptures.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAllCaptures.fulfilled, (state, action) => {
        state.loading = false;
        state.captureInfo = action.payload;
        state.captureDeleteAllSuccess = true;
      })
      .addCase(deleteAllCaptures.rejected, (state, action) => {
        state.loading = false;
        state.captureDeleteAllError = action.payload;
      });
  },
});

export default captureSlice.reducer;
