import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import Posts from './components/pages/Posts/posts';
import Albums from './components/pages/Albums/albums';
import NotFound from './components/pages/NotFound/notFound';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/posts' component={Posts} />
      <Route path='/albums' component={Albums} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Routes;