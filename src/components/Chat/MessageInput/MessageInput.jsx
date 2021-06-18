import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMessage } from '../../../store/messagesSlice/messagesSlice';
import getCurrentDate from './../../../utils/getCurrentDate';

const MessageInput = () => {

  const dispatch = useDispatch();

  const [text, changeText] = useState('Type something...');
  const [buttonDisabled, toggleButtonDisabled] = useState(true);

  const onTextChange = (event) => {
    changeText(event.target.value);
  };

  useEffect(() => { 
    if (text.length === 0) {
      return toggleButtonDisabled(true);
    }
    return toggleButtonDisabled(false);
  }, [text]);
  console.log(getCurrentDate())

  const sendMessage = (event) => {
    event.preventDefault();
    const message = { 
      "user": "Taylor",
      "avatar": "https://i.pravatar.cc/300?img=5",
      "created_at": getCurrentDate(),
      "message": text,
    }
    dispatch(addNewMessage(message))
  }

  return (
    <form onSubmit={sendMessage}>
      <TextField type="text" value={text} onChange={onTextChange} />
      <Button disabled={buttonDisabled} type="submit">
        Send
      </Button>
    </form>
  )
};

export default MessageInput;