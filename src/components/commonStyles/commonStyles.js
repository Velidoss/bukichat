import { makeStyles } from "@material-ui/core";

const commonStyles = makeStyles({
  chatName: {
    color: '#8cc054',
    fontSize: 32
  },
  headerContainer: {
    backgroundColor: 'black',
    padding: '15px 20px',
  },
  headerText: {
    color: 'white',
    fontSize: 16
  },
  usersCount: {
    marginLeft: 30,
  },
  messagesCount: {
    marginLeft: 20,
  },
  grey: '#e2e2e2',
  darkGrey: '#4b4d4a',
});

export default commonStyles;