const checkIfLikeOrDislikeExists = (messageLikes, newLike) => messageLikes
  .findIndex((like) => like.id === newLike.id);

export default checkIfLikeOrDislikeExists;
