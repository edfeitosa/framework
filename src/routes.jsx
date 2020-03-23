import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import NotFound from './components/pages/NotFound/notFound';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Routes;