import React from 'react';
import { TextField } from '@material-ui/core';

const ChangeMessageInput = ({ editedText, setEditedText }) => {
  const changeText = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <TextField value={editedText} onChange={changeText} />
  );
};

export default ChangeMessageInput;
