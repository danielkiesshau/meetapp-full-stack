import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { EditCreateMeetup, Profile } from '~/pages';
import DetailMeetup from '~/pages/DetailMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route
        path="/meetup-create-edit"
        component={EditCreateMeetup}
        isPrivate
      />
      <Route path="/meetup-detail" component={DetailMeetup} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
