import { configureStore } from "@reduxjs/toolkit";
import chatStatsSlice from "./chatStatsSlice/chatStatsSlice";
import messagesSlice from "./messagesSlice/messagesSlice";


const store = configureStore({
  reducer: {
    messages: messagesSlice,
    chatStats: chatStatsSlice,
  },
});

export default store;