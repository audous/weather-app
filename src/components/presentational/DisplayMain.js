import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './ViewStyle.css';

import SubscribersView from './SubscribersView';
import EditorsView from './EditorsView';
import AdminsView from './AdminsView';
import WeatherView from './WeatherView';
import NasaView from './NasaView';

/**
 * This is the view organization component. Handle each main component view and routing here.
 */

export default function DisplayMain() {
  return (
    <Router>

      <Route exact path="/" render={props=>(
        <React.Fragment>
          
          <WeatherView />
          <NasaView />
          
          <SubscribersView />
          <EditorsView />
          <AdminsView />

        </React.Fragment>
      )} />

      <Route exact path="/weather" render={props=>(
        <React.Fragment>
          <WeatherView />
        </React.Fragment>
      )} />

      <Route exact path="/nasa" render={props=>(
        <React.Fragment>
          <NasaView />
        </React.Fragment>
      )} />
    
    </Router>
  )
}
