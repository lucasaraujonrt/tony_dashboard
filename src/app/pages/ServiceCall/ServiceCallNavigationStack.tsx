import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getStackPath } from '@portal/config/routes';
import ServiceCallStack from './ServiceCall/ServiceCallStack';

const ServiceCallNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('SERVICE_CALL')}>
        <ServiceCallStack />
      </Route>
    </Switch>
  );
};

export default ServiceCallNavigationStack;
