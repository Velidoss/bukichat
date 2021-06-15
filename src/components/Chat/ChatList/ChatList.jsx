import React from 'react';
import { Grid } from '@material-ui/core';
import ChatMessage from './ChatMessage/ChatMessage';

const ChatList = () => {

  return (
    <Grid container>
      <ChatMessage />
      <ChatMessage />
    </Grid>
  )
};

export default ChatList;