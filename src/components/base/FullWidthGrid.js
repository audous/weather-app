import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Nasa from '../nasa/Nasa'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Trusted Context</h1>
            <p>Here is your content</p>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}><Nasa /></Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>xs=6 sm=4</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}><Nasa /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Trusted Context</h1>
          <p>Disclaimer Copyright 2020</p>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
