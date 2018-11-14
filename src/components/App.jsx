import React, { Component } from 'react';
import HeaderNav from './NavHeader';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/other" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
