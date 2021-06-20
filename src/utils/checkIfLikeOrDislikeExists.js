const checkIfLikeOrDislikeExists = (messageLikes, newLike) => {
  return messageLikes.findIndex((like) => like.id === newLike.id);
};

export default checkIfLikeOrDislikeExists;

