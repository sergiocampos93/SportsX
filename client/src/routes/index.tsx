import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CustomRegister from '../pages/CustomerRegister';
import CustomerList from '../pages/CustomerList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CustomerList} />
    <Route path="/register" component={CustomRegister} />
  </Switch>
);
export default Routes;
