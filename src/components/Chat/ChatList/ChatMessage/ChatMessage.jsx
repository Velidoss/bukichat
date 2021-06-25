import React, { useState } from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { addLike, editMessage, removeLike } from '../../../../store/messagesSlice/messagesSlice';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import EditIcon from '@material-ui/icons/Edit';
import style from './ChatMessageStyle';
import ChangeMessageInput from './ChangeMessageInput/ChangeMessageInput';

const ChatMessage = ({message, type, editable}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState('');
  const classes = style();
  const dispatch = useDispatch();

  const edit = () => {
    if (editMode) {
      dispatch(editMessage({newMessage: editedText, id: message.id}));
      setEditMode(false);
    } else {
      setEditMode(true);
      setEditedText(message.message);
    }
  };

  return (
    <Grid container item justify={type === 'other' ? 'flex-start' : 'flex-end'}>
      <Card className={type === 'other' ? classes.message : `${classes.message} ${classes.currentUserMessage}`} >
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
                {
                  editMode 
                  ? <ChangeMessageInput
                      editedText={editedText} 
                      setEditedText={setEditedText}
                    />
                  : <Typography>
                      {message.message}
                    </Typography>
                }

              </Grid>
              <Grid item container justify="flex-end" >
                {
                  editable && (
                    <Button onClick={edit}>
                      <EditIcon />
                    </Button>
                  )
                }
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