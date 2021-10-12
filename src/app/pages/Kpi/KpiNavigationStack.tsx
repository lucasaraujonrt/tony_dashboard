import { getStackPath } from '@portal/config/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import KpiStack from './Kpi/KpiStack';

const KpiNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('KPI')}>
        <KpiStack />
      </Route>
    </Switch>
  );
};

export default KpiNavigationStack;
