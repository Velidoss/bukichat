import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { addLike, removeLike } from '../../../../store/messagesSlice/messagesSlice';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import style from './ChatMessageStyle';

const ChatMessage = ({message, type}) => {
  const classes = style();
  const dispatch = useDispatch();

  return (
    <Grid container item justify={type === 'other' ? 'flex-start' : 'flex-end'}>
      <Card className={classes.message} >
        <CardContent>
          <Grid container >
            <Grid item container xs={2}>
              <img
                className={classes.userImage}
                src={message.avatar}
                alt="user"
              />
            </Grid>
            <Grid item container xs={10}>
              <Grid item container justify="flex-end">
                <Typography >
                  {message.created_at}
                </Typography>
              </Grid>
              <Grid item container>
                <Typography className={classes.userName}>
                  {message.user}
                </Typography>
              </Grid>
              <Grid item container>
                <Typography>
                  {message.message}
                </Typography>
              </Grid>
              <Grid item container justify="flex-end" >
                <Button onClick={() => dispatch(addLike(message.id))}>
                  <FavoriteIcon />
                </Button>
                <Typography>
                  {
                    message.likes.reduce((acc, like) => acc + like.value, 0) 
                  }
                </Typography>

                <Button onClick={() => dispatch(removeLike(message.id))}>
                  <ThumbDownIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
};

export default ChatMessage;