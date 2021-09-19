import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import KanbanDetails from './KanbanDetails';
import { getRouteStackPath } from '@portal/config/routes';

const KanbanStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('KANBAN', 'KANBAN_DETAILS')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.KANBAN.TITLE')}
          pageDescription={translate('PAGES.PANEL.KANBAN.DESCRIPTION')}
        >
          <KanbanDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default KanbanStack;
