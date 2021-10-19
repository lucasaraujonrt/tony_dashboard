import React from 'react';
import { Link } from 'react-router-dom';

import { WL_COMPANY_PANEL_LOGO } from '~/config/env';
import PanelSidebarMenu from '../PanelSidebarMenu/PanelSidebarMenu';
import { useReduxState } from '@portal/hooks/useReduxState';

interface IPanelSidebar {
  routes: models.route[];
}

const PanelSidebar = (props: IPanelSidebar) => {
  const { me } = useReduxState().user;

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
        <span className="panel-sidebar__name__span">{me?.name}</span>
      </div>
      <div className="panel-sidebar__menu">
        <PanelSidebarMenu routes={props.routes} />
      </div>
    </div>
  );
};

export default PanelSidebar;
