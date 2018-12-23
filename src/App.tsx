import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Homepage from './views/HomePage';
import CreateAccountPage from './views/CreateAccount';
import LoginPage from './views/Login';
import PasswordResetEmail from './views/SendResetEmail';
import PasswordReset from './views/ChangePassword';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={CreateAccountPage} />
      <Route exact path="/password/reset/email" component={PasswordResetEmail} />
      <Route exact path="/password/reset" component={PasswordReset} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
