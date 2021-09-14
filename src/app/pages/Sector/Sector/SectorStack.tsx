import React from 'react';
import { getRouteStackPath } from '@portal/config/routes';
import { Switch, Route } from 'react-router-dom';
import PanelContent from '@portal/components/PanelContent/PanelContent';
import { translate } from '@portal/services/i18n';
import { getPageType } from '@portal/utils/page';
import { PAGE_TYPE } from '@portal/enum/pageType';
import SectorDetails from './SectorDetails';
import SectorReport from './SectorReport';

const SectorStack: React.FC = () => {
  return (
    <Switch>
      <Route path={getRouteStackPath('SECTOR', 'REPORT')}>
        <PanelContent
          pageTitle={translate('PAGES.PANEL.SECTOR.REPORT.TITLE')}
          pageDescription={translate('PAGES.PANEL.SECTOR.REPORT.DESCRIPTION')}
        >
          <SectorReport />
        </PanelContent>
      </Route>
      <Route path={`${getRouteStackPath('SECTOR', 'SECTOR_DETAILS')}`}>
        <PanelContent
          pageTitle={translate(
            `PAGES.PANEL.SECTOR.DETAILS.TITLE.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
          pageDescription={translate(
            `PAGES.PANEL.SECTOR.DETAILS.DESCRIPTION.${
              getPageType() === PAGE_TYPE.ADD ? 'ADD' : 'EDIT'
            }`
          )}
        >
          <SectorDetails />
        </PanelContent>
      </Route>
    </Switch>
  );
};

export default SectorStack;
