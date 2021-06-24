import { makeStyles } from "@material-ui/core";

const MessageInputStyle = makeStyles({
  inputContainer: {
    backgroundColor: '#e2e2e2',
    padding: 20
  },
  textField: {
    backgroundColor: 'white',
  },
  inputButton: {
    background: '#8cc054',
    fontSize: 22,
    color: 'white',
    borderRadius: 20,
    width: '100%',
    marginLeft: 10
  },
});

export default MessageInputStyle;