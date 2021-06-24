import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import ChatMessage from './ChatMessage/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from './../../../store/messagesSlice/messagesSlice';
import { loadingMessagesSelector, messagesSelector } from '../../../store/selectors';
import style from './ChatListStyle';
import { userDataSelector } from './../../../store/selectors';

const ChatList = ({chatWindowRef}) => {
  const classes = style();
  const dispatch = useDispatch();
  const messages  = useSelector(messagesSelector);
  const {userName} = useSelector(userDataSelector);
  const isLoading  = useSelector(loadingMessagesSelector);

  useEffect(() => {
    dispatch(getMessages());
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [chatWindowRef, messages.length])

  return (
    <Grid 
      container 
      direction="column" 
      className={classes.chatContainer}
      wrap="nowrap"
      ref={chatWindowRef}
    >
      {
        isLoading 
        ? <CircularProgress />
        : messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            type={message.user === userName ? 'user' : 'other'} 
          />
        ))
      }
    </Grid>
  )
};

export default ChatList;