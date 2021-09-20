import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getRouteStackPath } from '@portal/config/routes';
import { WL_COMPANY_PANEL_LOGO } from '~/config/env';
import { routeExist } from '~/config/routes';
import PanelSidebarMenu from '../PanelSidebarMenu/PanelSidebarMenu';
import { useReduxState } from '@portal/hooks/useReduxState';

interface IPanelSidebar {
  routes: models.route[];
}

const PanelSidebar = (props: IPanelSidebar) => {
  const location = useLocation();

  const { me } = useReduxState().user;

  useEffect(() => {
    const validatePath = () => {
    if (!routeExist(location.pathname)) {
      window.location.href = getRouteStackPath('USER', 'REPORT');
    }
  };
    validatePath();
  }, [location.pathname]);

  return (
    <div className="panel-sidebar">
      <div className="panel-sidebar__logo">
        <Link to="/">
          <img
            className="panel-sidebar__logo__img"
            src={WL_COMPANY_PANEL_LOGO}
            alt="sidebar logo"
          />
        </Link>
      </div>
      <div className="panel-sidebar__name">
        <span className="panel-sidebar__name__span">
          {me?.name || 'Lucas'}
        </span>
      </div>
      <div className="panel-sidebar__menu">
        <PanelSidebarMenu routes={props.routes} />
      </div>
    </div>
  );
};

export default PanelSidebar;
