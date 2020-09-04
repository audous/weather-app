import React from 'react';
import SubscribersView from './SubscribersView';
import EditorsView from './EditorsView';
import AdminsView from './AdminsView';

import Weather from '../weather/Weather';

export default function DisplayMain() {
  return (
    <div>
      <Weather />
      <SubscribersView />
      <EditorsView />
      <AdminsView />
    </div>
  )
}
