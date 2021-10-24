import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/createProfile' component={createProfile}></Route>

      <Route exact path='/returningUser' component={returningUse}></Route>

      <Route exact path='/survey' component={survey}></Route>

      <Route exact path='/matches' component={matches}></Route>

      <Route exact path='/messaging' component={messaging}></Route>

    </Switch>
  );
}

export default Main;