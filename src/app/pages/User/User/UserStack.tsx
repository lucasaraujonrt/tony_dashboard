import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import UserReport from './UserReport';
import UserDetails from './UserDetails';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { PAGE_TYPE } from '@portal/enum/pageType';

const UserStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('USER', 'REPORT')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.USER.REPORT.TITLE')}
          pageDescription={translate('PAGES.PANEL.USER.REPORT.DESCRIPTION')}
        >
          <UserReport />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('USER', 'USER_DETAILS')}/:id`}>
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.USER.DETAILS.TITLE.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.USER.DETAILS.DESCRIPTION.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
        >
          <UserDetails />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('USER', 'USER_DETAILS')}`}>
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.USER.DETAILS.TITLE.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.USER.DETAILS.DESCRIPTION.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
        >
          <UserDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default UserStack;
