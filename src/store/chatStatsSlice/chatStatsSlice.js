import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: 0,
  messages: 0,
  lastMessageDate: ''
}

const chatStatsSlice = createSlice({
  name: 'chatStats',
  initialState,
  reducers: {
    setChatStats: (state, action) => state = {...state, ...action.payload},
    addUser: (state) => state.users += 1,
    removeUser: (state) => state.users -= 1,
    addMessage: (state) => state.messages += 1,
    removeMessage: (state) => state.messages -= 1,
    setLastMessageDate: (state, action) => state.lastMessageDate = action.payload,
  }
});

export const {
  setChatStats, addUser, removeUser, addMessage, removeMessage, setLastMessageDate 
} = chatStatsSlice.actions;

export default chatStatsSlice.reducer;