import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const ChatMessage = ({message}) => {

  return (
    <Card >
      <CardContent>
        <img
          src={message.avatar}
          alt="user"
        />
        <Typography>
          {message.user}
        </Typography>
        <Typography>
          {message.message}
        </Typography>
        <Typography>
          {message.created_at}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ChatMessage;