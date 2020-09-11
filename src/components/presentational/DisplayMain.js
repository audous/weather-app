import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './ViewStyle.css';

import Weather from '../weather/Weather';
import Nasa from '../nasa/Nasa';

import FullWidthGrid from '../base/FullWidthGrid';

/**
 * This is the view organization component. Handle each main component view and routing here.
 */

export default function DisplayMain() {
  return (
    <Router>

      <Route exact path="/" render={props=>(
        <React.Fragment>
          
          <FullWidthGrid/>
          
        </React.Fragment>
      )} />

      <Route exact path="/weather" render={props=>(
        <React.Fragment>
          <Weather />
        </React.Fragment>
      )} />

      <Route exact path="/nasa" render={props=>(
        <React.Fragment>
          <Nasa />
        </React.Fragment>
      )} />
    
    </Router>
  )
}
