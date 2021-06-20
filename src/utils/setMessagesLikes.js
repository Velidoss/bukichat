const setMessagesLikes = (messages) => {
  return messages.map((message) => ({ ...message, likes: []}));
};

export default setMessagesLikes;