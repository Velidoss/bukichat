const getMessageId = (messages) => {
  return messages[messages.length - 1].id + 1;
};

export default getMessageId;