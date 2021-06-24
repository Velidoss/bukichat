import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { chatStatsSelector } from '../../store/selectors';
import style from '../commonStyles/commonStyles';

const Header = () => {
  const classes = style();

  const stats = useSelector(chatStatsSelector);
  console.log(stats);

  return (
    <Grid container className={classes.headerContainer}>
      <Grid container item alignItems="center" justify="flex-start" xs={6}>
        <Grid item>
          <Typography className={classes.chatName}>
            My Chat
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={[classes.headerText, classes.usersCount]}>
            {stats.users} users
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={[classes.headerText, classes.messagesCount]}>
            {stats.messages} messages
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={6} alignItems="center" justify="center">
        <Typography className={classes.headerText}>
          Last message: {stats.lastMessageDate}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Header;