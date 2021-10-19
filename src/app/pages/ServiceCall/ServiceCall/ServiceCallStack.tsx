import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { PAGE_TYPE } from '@portal/enum/pageType';
import ServiceCallDetails from './ServiceCallDetails';
import ServiceCallReport from './ServiceCallReport';

const ServiceCallStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('SERVICE_CALL', 'REPORT')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.SERVICE_CALL.REPORT.TITLE')}
          pageDescription={translate(
            'PAGES.PANEL.SERVICE_CALL.REPORT.DESCRIPTION'
          )}
        >
          <ServiceCallReport />
        </PanelContent>
      </Route>
      <Route
        path={`${getRouteStackPath(
          'SERVICE_CALL',
          'SERVICE_CALL_DETAILS'
        )}/:id`}
      >
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.SERVICE_CALL.DETAILS.TITLE.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.SERVICE_CALL.DETAILS.DESCRIPTION.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
        >
          <ServiceCallDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default ServiceCallStack;
