import { makeStyles } from "@material-ui/core";

const ChatListStyle = makeStyles({
  chatContainer: {
    height: '60vh',
    overflow: 'auto',
  },
  message: {
    backgroundColor: '#e2e2e2',
    margin: '20px 0',
    borderRadius: 10,
    minWidth: 700,
  },
  currentUserMessage: {
    backgroundColor: '#4b4d4a',
  },
  userImage: {
    width: 80,
    height: 80,
  },
  userName: {
    color: '#8cc054',
  },
}
);

export default ChatListStyle;