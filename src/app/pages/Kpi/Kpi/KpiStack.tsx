import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getRouteStackPath } from '@portal/config/routes';
import KpiDetails from './KpiDetails';

const KpiStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('KPI', 'KPI_DETAILS')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.KPI.TITLE')}
          pageDescription={translate('PAGES.PANEL.KPI.DESCRIPTION')}
        >
          <KpiDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default KpiStack;
