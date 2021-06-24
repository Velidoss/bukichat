import { Button, TextField, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage } from '../../../store/messagesSlice/messagesSlice';
import getCurrentDate from './../../../utils/getCurrentDate';
import style from './MessageInputStyle';
import { userDataSelector } from './../../../store/selectors';

const MessageInput = () => {
  const classes = style();
  const dispatch = useDispatch();

  const [text, changeText] = useState('Type something...');
  const [buttonDisabled, toggleButtonDisabled] = useState(true);
  const {avatar, userName} = useSelector(userDataSelector);

  const onTextChange = (event) => {
    changeText(event.target.value);
  };

  useEffect(() => { 
    if (text.length === 0) {
      return toggleButtonDisabled(true);
    }
    return toggleButtonDisabled(false);
  }, [text]);

  const sendMessage = (event) => {
    event.preventDefault();
    const message = { 
      user: userName,
      avatar: avatar,
      created_at: getCurrentDate(),
      message: text,
      likes: [],
    }
    dispatch(addNewMessage(message));
  }


  return (
    <form 
      onSubmit={sendMessage} 
      className={classes.inputContainer}
    >
      <Grid container >
        <Grid container item xs={10}>
          <TextField 
            className={classes.textField}
            fullWidth 
            type="text" 
            value={text} 
            onChange={onTextChange} 
            variant="outlined"
            autoFocus={true}
          />
        </Grid>
        <Grid container item xs={2} >
          <Button className={classes.inputButton} disabled={buttonDisabled} type="submit">
            Send
          </Button>
        </Grid>

      </Grid>

    </form>
  )
};

export default MessageInput;