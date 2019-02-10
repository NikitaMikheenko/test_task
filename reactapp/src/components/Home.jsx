import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Instagram from './Instagram.jsx';
import YouTube from './YouTube.jsx';
import NotFound from './NotFound.jsx';

export default class Home extends Component {
  render() {
    return (
      <Router>
            <Switch>
                <Route exact path="/" component={Instagram} />
                <Route path="/instagram" component={Instagram}/>
                <Route path="/youtube" component={YouTube} />
                <Route component={NotFound}/>
            </Switch>
      </Router>
    );
  }
}