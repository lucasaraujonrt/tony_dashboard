import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getStackPath } from '@portal/config/routes';
import SectorStack from './Sector/SectorStack';

const SectorNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('SECTOR')}>
        <SectorStack />
      </Route>
    </Switch>
  );
};

export default SectorNavigationStack;
