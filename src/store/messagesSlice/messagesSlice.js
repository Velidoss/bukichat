import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setChatStats } from "../chatStatsSlice/chatStatsSlice";
import countMessagesStats from './../../utils/countMessagesStats';
import getMessageId from './../../utils/getMessageId';

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
  reducers: {
    addNewMessage: (state, action) => {
      action.payload.id = getMessageId(state.messages);
      state.messages.push(action.payload);
    }
  },
  extraReducers: {
    [getMessages.fulfilled]: (state, action) => {
      state.messages = action.payload;
      state.waitingForMessages = false;
    },
    [getMessages.pending]: (state, action) => {
      state.waitingForMessages = true;
    },
  }
});

export const { addNewMessage } = messagesSlice.actions;

export default messagesSlice.reducer;