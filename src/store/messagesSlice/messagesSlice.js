import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { setChatStats, setLastMessageDate } from "../chatStatsSlice/chatStatsSlice";
import countMessagesStats from './../../utils/countMessagesStats';
import getMessageId from './../../utils/getMessageId';
import setMessagesLikes from './../../utils/setMessagesLikes';
import checkIfLikeOrDislikeExists from './../../utils/checkIfLikeOrDislikeExists';

const initialState = {
  messages: [],
  waitingForMessages: true,
};

export const getMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (_, thunkAPI) => {
    const response = await fetch('https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8');
    const data = await response.json();
    thunkAPI.dispatch(setChatStats(countMessagesStats(data)));
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
    },
    addLike: (state, action) => {
      const messageIndex = state.messages.findIndex((message) => message.id === action.payload);
      const newLike = { id: action.payload, value: 1 };
      const likeIndex = checkIfLikeOrDislikeExists(current(state).messages[messageIndex].likes, newLike);
      if (likeIndex >= 0) {
        if (state.messages[messageIndex].likes[likeIndex].value > 0) {
          state.messages[messageIndex].likes = state
          .messages[messageIndex].likes.filter((like) => like.id !== action.payload);
        } else {
          state.messages[messageIndex].likes[likeIndex].value = 1
        }
      } else {
        state.messages[messageIndex].likes.push(newLike);
      }
    },
    removeLike: (state, action) => {
      const messageIndex = state.messages.findIndex((message) => message.id === action.payload);
      const newDisLike = { id: action.payload, value: -1 }
      const likeIndex = checkIfLikeOrDislikeExists(current(state).messages[messageIndex].likes, newDisLike);
      if (likeIndex >= 0) {
        if (state.messages[messageIndex].likes[likeIndex].value < 0) {
          state.messages[messageIndex].likes = state
          .messages[messageIndex].likes.filter((like) => like.id !== action.payload);
        } else {
          state.messages[messageIndex].likes[likeIndex].value = -1
        }
      } else {
        state.messages[messageIndex].likes.push(newDisLike);
      }
    },
    editMessage: (state, action) => {
      const {id, newMessage} = action.payload;
      const messageIndex = state.messages.findIndex((message) => message.id === id);
      state.messages[messageIndex].message = newMessage;
    },
  },
  extraReducers: {
    [getMessages.fulfilled]: (state, action) => {
      state.messages = setMessagesLikes(action.payload);
      state.waitingForMessages = false;
    },
    [getMessages.pending]: (state) => {
      state.waitingForMessages = true;
    },
  }
});

export const { addNewMessage, addLike, removeLike, editMessage } = messagesSlice.actions;

export default messagesSlice.reducer;