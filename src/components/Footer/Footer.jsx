import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {

  return (
    <Grid container>
      <Grid item container>
        <Typography  >Home</Typography>
        <Typography  >About</Typography>
        <Typography  >Contact us</Typography>
      </Grid>
      <Grid item container>
        <Typography  >&copy; Copyright 2019</Typography>
      </Grid>
    </Grid>
  )
};

export default Footer;