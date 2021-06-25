import { makeStyles } from "@material-ui/core";

const chatMessageStyle = makeStyles({
  message: {
    backgroundColor: '#e2e2e2',
    margin: '20px 0',
    borderRadius: 10,
    minWidth: 700,
  },
  currentUserMessage: {
    backgroundColor: '#4b4d4a',
    color: 'white'
  },
  userImage: {
    width: 80,
    height: 80,
  },
  userName: {
    color: '#8cc054',
    fontSize: 20
  },
}
);

export default chatMessageStyle;