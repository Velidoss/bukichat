import { configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./messagesSlice/messagesSlice";

const store = configureStore({
  reducer: messagesSlice,
});

export default store;