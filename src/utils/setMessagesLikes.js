const setMessagesLikes = (messages) => messages.map((message) => ({ ...message, likes: [] }));

export default setMessagesLikes;
