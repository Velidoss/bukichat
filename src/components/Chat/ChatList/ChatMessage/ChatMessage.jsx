import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { addLike, removeLike } from '../../../../store/messagesSlice/messagesSlice';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const ChatMessage = ({message}) => {

  const dispatch = useDispatch();

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
        {
          message.likes.reduce((acc, like) => acc + like.value, 0) 
        }
        <Button onClick={() => dispatch(addLike(message.id))}>
          <FavoriteIcon />
        </Button>
        <Button onClick={() => dispatch(removeLike(message.id))}>
          <ThumbDownIcon />
        </Button>
      </CardContent>
    </Card>
  )
};

export default ChatMessage;