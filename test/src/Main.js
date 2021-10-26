import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateProfile from './CreateProfile';
import ReturningUser from './ReturningUser';
import Survey from './Survey';
import Matches from './Matches';
import Messaging from './Messaging';




const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/CreateProfile' component={CreateProfile}></Route>

      <Route exact path='/ReturningUser' component={ReturningUser}></Route>

      <Route exact path='/Survey' component={Survey}></Route>

      <Route exact path='/Matches' component={Matches}></Route>

      <Route exact path='/Messaging' component={Messaging}></Route>

    </Switch>
  );
}

export default Main;