import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
