'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
 import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './store';
import StarContainer from './containers/StarContainer';
import NewStar from './components/NewStar';

render (
  <Provider store={store}>
    <div>
      <Router history={hashHistory}>
          <Route path="/">
            <Route path="stars" component={StarContainer} />
            <IndexRoute component={StarContainer} />
          </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
