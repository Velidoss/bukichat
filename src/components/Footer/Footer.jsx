import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {

  return (
    <Grid container>
      <Grid item container>
        <Typography item >Home</Typography>
        <Typography item >About</Typography>
        <Typography item >Contact us</Typography>
      </Grid>
      <Grid item container>
        <Typography item >&copy; Copyright 2019</Typography>
      </Grid>
    </Grid>
  )
};

export default Footer;