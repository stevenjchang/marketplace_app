import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import PostList from './components/PostList';

const Error = () => (
  <div>
    <h1>Route does not exist</h1>
  </div>
)

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path='/list' component={Error} />
          <Route path='/' component={App} exact />
          <Route path='/posts' component={PostList} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
