import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const dummyMessage = {
  "id": "9333000183101",
  "user": "Kate",
  "avatar": "https://i.pravatar.cc/300?img=5",
  "created_at": "2021-05-17 23:30:11",
  "message": "Hey, guys! Have you seen the new episode of 'Black Mirror'?"
}

const ChatMessage = () => {
  

  return (
    <Card >
      <CardContent>
        <img
          src={dummyMessage.avatar}
          alt="user"
        />
        <Typography>
          {dummyMessage.user}
        </Typography>
        <Typography>
          {dummyMessage.message}
        </Typography>
        <Typography>
          {dummyMessage.created_at}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ChatMessage;