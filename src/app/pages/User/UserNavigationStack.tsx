import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getStackPath } from '@portal/config/routes';
import UserStack from './User/UserStack';
import EmployeeStack from './Employee/EmployeeStack';

const UserNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('USER')}>
        <UserStack />
        <EmployeeStack />
      </Route>
    </Switch>
  );
};

export default UserNavigationStack;
