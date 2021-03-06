import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Nasa from '../nasa/Nasa'
import Weather from '../weather/Weather';
import Covid from '../covid/Covid';

/**
 * colors https://visme.co/blog/website-color-schemes/ #7 Stylish and Sophisticated 
 * #5D5C61
 * #379683
 * #7395AE
 * #557A95
 * #B1A296
 */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    background:'#A5ACB4'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    
    <div className="DisplayMain" >
      <div >
        <Box flexShrink={1}>
          <Grid container spacing={3}>

            <Grid item xs={12} >
              <div style={{textAlign:'center'}}>
                <h1 style={{color:'#FDBA11'}}>Trusted Context</h1>
                <p style={{color:'#FDBA11'}}>Here is your content. This website is a work in progress and is for demoing purposes only at the moment. Features may not be complete. More to come...</p>
              </div>
            </Grid>
            
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}><Nasa /></Paper>
            </Grid>


            <Grid item xs={12} sm={4} >
              <Paper className={classes.paper}><h2>Table of Contents</h2>
                <h4>This paper includes the content listed below.</h4>
                <ol>
                  <li>Header - needs decomposition</li>
                  <li>NASA Picture of the Day</li>
                  <li>TOC - needs decomposition</li>
                  <li>Weather current city search</li>
                  <li>Footer - needs decomposition</li>
                </ol>
                <h4>This paper has these items coming soon...</h4>
                <ol>
                  <li>Positive Message</li>
                  <li>COVID data to numbers and information</li>
                  <li>Comic Strip</li>
                  <li>Advertorial</li>
                  <li>Credits</li>
                  <li>Stocks</li>
                  <li>Game and/or Crosswords</li>
                </ol>
              </Paper>
              
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}><Weather /></Paper>
            </Grid>




            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_Positive: Let kindness be your motivation.</Paper>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_Comic</Paper>
            </Grid>


            <Grid item xs={12} sm={4} >
              <Paper className={classes.paper}>PLACEHOLDER_GAME_OR_CROSSWORD</Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_COMIC</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_COMIC</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_COMIC</Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>PLACEHOLDER_ADVERTORIAL or EDITORIAL</Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper}><Covid/></Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <p>Thank you for exploring this demo application. This is a React front end that is connecting to multiple back ends to showcase different frameworks and programming techniques.</p>
                <p>PLACEHOLDER_Credits</p>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1>Trusted Context</h1>
              <p>Disclaimer Copyright 2020</p>
              </Paper>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
    
  );
}
