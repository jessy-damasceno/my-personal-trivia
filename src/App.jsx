import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Login {...props} />} />
      <Route exact path="/game" render={(props) => <Game {...props} />} />
    </Switch>
  );
}

export default App;
