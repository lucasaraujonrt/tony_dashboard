import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getStackPath } from '@portal/config/routes';
import CompanyStack from './Company/CompanyStack';

const CompanyNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('COMPANY')}>
        <CompanyStack />
      </Route>
    </Switch>
  );
};

export default CompanyNavigationStack;
