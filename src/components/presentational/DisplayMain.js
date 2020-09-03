import React from 'react';
import SubscribersView from './SubscribersView';
import EditorsView from './EditorsView';
import AdminsView from './AdminsView';

export default function DisplayMain() {
  return (
    <div>

      <SubscribersView />

      <EditorsView />

      <AdminsView />
      
    </div>
  )
}
