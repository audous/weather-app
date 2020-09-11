import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function NasaView(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} >
      <Grid item xs={12} >
        <Paper className={classes.paper}>
          <h2>NASA Image of the Day </h2>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}><a href={props.url}><img src={props.url} alt="nasa apod" style={{maxWidth:"100%"}}/></a></Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper >
          <h5>{props.copyright}</h5>
          <p>{props.explanation} </p>
        </Paper>
      </Grid>
    </Grid>
  )
}
