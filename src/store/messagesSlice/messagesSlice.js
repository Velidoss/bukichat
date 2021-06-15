import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  waitingForMessages: false,
};

export const getMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await fetch('https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8');
    return await response.json();
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
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

export default messagesSlice.reducer;