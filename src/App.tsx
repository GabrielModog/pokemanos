import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './config/routes';

const App = () => (
  <Router>
    <Switch>
      {routes.map((route: any) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path + 3}
        />
      ))}
    </Switch>
  </Router>
);

export default App;
