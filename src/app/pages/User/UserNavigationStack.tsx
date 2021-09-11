import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getStackPath } from '@portal/config/routes';
import UserStack from './User/UserStack';

const UserNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('USER')}>
        <UserStack />
      </Route>
    </Switch>
  )
}

export default UserNavigationStack;
