import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { Container } from 'semantic-ui-react';
import Dashboard from './components/Dashboard';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </Container>
)

export default App;
