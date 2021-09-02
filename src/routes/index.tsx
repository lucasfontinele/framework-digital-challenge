import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Post from 'pages/Post';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
