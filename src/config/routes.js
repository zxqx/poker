import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/another" component={AnotherPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
