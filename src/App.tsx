import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Homepage from './containers/HomePage';
import routes from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      {routes.map(route => (
        <Route
          key={route.name}
          exact={route.exact}
          component={route.component}
          path={route.path}
        />
      ))}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
