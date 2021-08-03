import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { getRouteStackPath } from '@portal/config/routes';
import { WL_COMPANY_PANEL_LOGO } from '~/config/env';
import { routeExist } from '~/config/routes';
import { ProfileType } from '~/enum/profileType';

import PanelSidebarMenu from '../PanelSidebarMenu/PanelSidebarMenu';
import { useReduxState } from '@portal/hooks/useReduxState';

interface IPanelSidebar {
  routes: models.route[];
}

const PanelSidebar = (props: IPanelSidebar) => {
  const location = useLocation();

  const { user } = useReduxState();

  const validatePath = () => {
    if (!routeExist(location.pathname)) {
      // window.location.href = getRouteStackPath('DASHBOARD', 'DETAILS');
    }
  };

  useEffect(() => {
    validatePath();
  }, []);

  const loggedUser = useSelector(
    (state: reducers.rootReducer) => state.auth.me
  );

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
          {user.me?.synod ? user.me?.synod.name : user.me?.user.name}
        </span>
      </div>
      <div className="panel-sidebar__menu">
        <PanelSidebarMenu
          access={(accessType: ProfileType) =>
            !loggedUser?.profileType || loggedUser?.profileType === accessType
          }
          routes={props.routes}
        />
      </div>
    </div>
  );
};

export default PanelSidebar;
