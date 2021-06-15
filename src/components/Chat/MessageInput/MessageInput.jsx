import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const MessageInput = () => {

  const [text, changeText] = useState('');
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

  const sendMessage = (event) => {
    event.preventDefault();
    alert(text)
  }

  return (
    <form onSubmit={sendMessage}>
      <TextField type="text" defaultValue="Type something..." value={text} onChange={onTextChange} />
      <Button disabled={buttonDisabled} type="submit">
        Send
      </Button>
    </form>
  )
};

export default MessageInput;