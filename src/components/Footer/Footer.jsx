import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './FooterStyle';

const Footer = () => {
  const classes = style();

  return (
    <Grid 
      container 
      className={classes.footerContainer} 
      direction="column"
      alignItems="center"
    >
      <Grid item container xs={6} justify="space-between">
        <Grid justify="center">
          <Typography className={classes.footerText}>Home</Typography>
        </Grid>
        <Grid justify="center">
          <Typography className={classes.footerText}>About</Typography>
        </Grid>
        <Grid justify="center">
          <Typography className={classes.footerText}>Contact us</Typography>
        </Grid>        
      </Grid>
      <Grid item container justify="center" className={classes.copyright}>
        <Typography  >&copy; Copyright 2019</Typography>
      </Grid>
    </Grid>
  )
};

export default Footer;