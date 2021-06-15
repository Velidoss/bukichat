import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { chatStatsSelector } from '../../store/selectors';

const Header = () => {

  const stats = useSelector(chatStatsSelector);
  console.log(stats);

  return (
    <Grid container>
      <Grid container item>
        <Typography>
          My CHat
        </Typography>
        <Typography>
          {stats.users} users
        </Typography>
        <Typography>
          {stats.messages} messages
        </Typography>
      </Grid>
      <Grid container item>
        <Typography>
          Last message: {stats.lastMessageDate}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Header;