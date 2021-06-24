import { configureStore } from "@reduxjs/toolkit";
import chatStatsSlice from "./chatStatsSlice/chatStatsSlice";
import messagesSlice from "./messagesSlice/messagesSlice";
import userSlice from './userSlice/userSlice';


const store = configureStore({
  reducer: {
    messages: messagesSlice,
    chatStats: chatStatsSlice,
    user: userSlice,
  },
});

export default store;