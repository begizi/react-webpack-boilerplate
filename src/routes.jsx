import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloWorld from 'components/HelloWorld';

const routes = (
  <Route path="/">
    <IndexRoute component={HelloWorld} />
  </Route>
);

export default routes;
