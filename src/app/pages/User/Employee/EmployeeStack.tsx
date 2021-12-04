import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { PAGE_TYPE } from '@portal/enum/pageType';
import EmployeeReport from './EmployeeReport';
import EmployeeDetails from './EmployeeDetails';

const EmployeeStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('USER', 'EMPLOYEE_REPORT')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.EMPLOYEE.REPORT.TITLE')}
          pageDescription={translate('PAGES.PANEL.EMPLOYEE.REPORT.DESCRIPTION')}
        >
          <EmployeeReport />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('USER', 'EMPLOYEE_DETAILS')}/:id`}>
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.EMPLOYEE.DETAILS.TITLE.EDIT${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.EMPLOYEE.DETAILS.DESCRIPTION.EDIT`
          )}
        >
          <EmployeeDetails />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('USER', 'EMPLOYEE_DETAILS')}`}>
        <PanelContent
          pageTitle={translate(`PAGES.PANEL.EMPLOYEE.DETAILS.TITLE.ADD`)}
          pageDescription={translate(
            `PAGES.PANEL.EMPLOYEE.DETAILS.DESCRIPTION.ADD`
          )}
        >
          <EmployeeDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default EmployeeStack;
