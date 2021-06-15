import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import ChatMessage from './ChatMessage/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from './../../../store/messagesSlice/messagesSlice';
import { loadingMessagesSelector, messagesSelector } from '../../../store/selectors';

const ChatList = () => {

  const dispatch = useDispatch();
  const messages  = useSelector(messagesSelector);
  const isLoading  = useSelector(loadingMessagesSelector);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  console.log(messages, isLoading);

  return (
    <Grid container>
      {
        isLoading 
        ? <CircularProgress />
        : messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))
      }
    </Grid>
  )
};

export default ChatList;