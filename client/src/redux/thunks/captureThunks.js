import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const listCaptures = createAsyncThunk(
  'capture/listCaptures',
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`${serverUrl}/captures`, config);

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);
