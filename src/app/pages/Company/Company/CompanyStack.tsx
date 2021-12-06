import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import CompanyReport from './CompanyReport';
import CompanyDetails from './CompanyDetails';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { PAGE_TYPE } from '@portal/enum/pageType';

const CompanyStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('COMPANY', 'REPORT')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.COMPANY.REPORT.TITLE')}
          pageDescription={translate('PAGES.PANEL.COMPANY.REPORT.DESCRIPTION')}
        >
          <CompanyReport />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('COMPANY', 'COMPANY_DETAILS')}/:id`}>
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.COMPANY.DETAILS.TITLE.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.COMPANY.DETAILS.DESCRIPTION.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
        >
          <CompanyDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default CompanyStack;
