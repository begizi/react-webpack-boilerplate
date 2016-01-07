import React from 'react';
import { Route } from 'react-router';
import HelloWorld from 'components/HelloWorld';

const routes = (
  <Route path="/">
    <Route path="world" component={HelloWorld} />
  </Route>
);

export default routes;
