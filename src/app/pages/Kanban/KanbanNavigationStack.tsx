import { getStackPath } from '@portal/config/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import KanbanStack from './Kanban/KanbanStack';

const KanbanNavigationStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getStackPath('KANBAN')}>
        <KanbanStack />
      </Route>
    </Switch>
  );
};

export default KanbanNavigationStack;
