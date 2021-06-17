const countMessagesStats = (messagesArray) => {
  const uniqueUsers = messagesArray.reduce((acc, message) => {
    if (!acc.some((name) => name === message.user)){
      acc.push(message.user);
      return acc;
    }
    return acc;
  }, []);

  return {
    messages: messagesArray.length,
    users: uniqueUsers.length,
  }
};

export default countMessagesStats;