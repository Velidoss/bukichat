import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {

  return (
    <Grid container>
      <Grid container item>
        <Typography>
          My CHat
        </Typography>
        <Typography>
          7 users
        </Typography>
        <Typography>
          9 messages
        </Typography>
      </Grid>
      <Grid container item>
        <Typography>
          Last message: 2021-06/09 12:00:00
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Header;