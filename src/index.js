/**
 * Application entry point
 */

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

import 'styles/main.styl';

const rootEl = document.getElementById('app');
let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>
, rootEl);

