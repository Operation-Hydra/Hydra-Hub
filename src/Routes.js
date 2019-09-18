//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { Route, Switch } from 'react-router-dom';

//> Components
/**
 * SignInPage: Page for the login process
 * SignUpPage: Page for the signup process
 * DayPage: Display a single day and its events
 * DashboardPage: Page for user to access Moody and its features
 * UpgradePage: Page for checking the current package and upgrading
 */
import {
  SignInPage,
  DashboardPage,
  SearchPage,
} from './components/pages';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route 
        exact 
        path="/login" 
        component={SignInPage} />
        <Route 
        exact
        path="/dashboard" 
        component={DashboardPage} />
        <Route 
        exact
        path="/search" 
        component={SearchPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
