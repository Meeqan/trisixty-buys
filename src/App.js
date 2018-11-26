import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Homepage from './views/HomePage';
import CreateAccountPage from './views/CreateAccountPage';
import LoginPage from './views/LoginPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={CreateAccountPage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
