import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CreateProfile from './CreateProfile';
import ReturningUser from './ReturningUser';
import Survey from './Survey';
import Matches from './Matches';
import Messaging from './Messaging';
import Login from './Login'
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login}></Route>

        <Route exact path='/CreateProfile' component={CreateProfile}></Route>

        <Route exact path='/ReturningUser' component={ReturningUser}></Route>

        <Route exact path='/Survey' component={Survey}></Route>

        <Route exact path='/Matches' component={Matches}></Route>

        <Route exact path='/Messaging' component={Messaging}></Route>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>

      </Router>
    </Provider>
  );
}

export default Main;