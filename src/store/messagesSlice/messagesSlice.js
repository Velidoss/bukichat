import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setChatStats } from "../chatStatsSlice/chatStatsSlice";
import countMessagesStats from './../../utils/countMessagesStats';

const initialState = {
  messages: [],
  waitingForMessages: true,
};

export const getMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (_, thunkAPI) => {
    const response = await fetch('https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8');
    const data = await response.json();
    thunkAPI.dispatch(setChatStats(countMessagesStats(data)))
    return data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: {
    [getMessages.fulfilled]: (state, action) => {
      state.messages = action.payload;
      const chatStats = countMessagesStats(state.messages);
      state.waitingForMessages = false;
    },
    [getMessages.pending]: (state, action) => {
      state.waitingForMessages = true;
    },
  }
});

export default messagesSlice.reducer;