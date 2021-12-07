import React from 'react';
import { useReduxState } from '@portal/hooks/useReduxState';
import { Link, useLocation } from 'react-router-dom';

import { translate } from '~/services/i18n';

export interface IProps {
  routes: models.route[];
}

const PanelSidebarMenu: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();
  const { me } = useReduxState().user;

  const isActive = (path: string) => path === location.pathname;
  console.log({ me });

  return (
    <div className="panel-sidebar-menu">
      <div className="panel-sidebar-menu__items">
        {props.routes
          .filter((o) => !o.hide)
          .filter(
            (o) =>
              o.permission === undefined ||
              (me && o.permission.includes(me.profileType))
          )
          .map((item: models.route, itemKey: number) => (
            <div
              key={itemKey.toString()}
              className="panel-sidebar-menu__items__single"
            >
              <span className="panel-sidebar-menu__items__single__icon">
                <img
                  className="panel-sidebar-menu__items__single__icon__image"
                  src={item.icon}
                  alt={item.iconAlt}
                />
              </span>
              <span className="panel-sidebar-menu__items__single__title">
                {translate(item.name)}
              </span>
              <div className="panel-sidebar-menu__items__single__items">
                {item.items
                  .filter((o) => !o.sidebarHidden)
                  .filter(
                    (o) =>
                      o.permission === undefined ||
                      (me && o.permission.includes(me.profileType))
                  )
                  .map((subItem: models.routeInner, subItemKey: number) => (
                    <div
                      className="panel-sidebar-menu__items__single__items__single"
                      key={subItemKey.toString()}
                    >
                      <Link
                        to={`${item.route}${subItem.route}`}
                        className={`panel-sidebar-menu__items__single__items__single__link ${
                          isActive(`${item.route}${subItem.route}`) &&
                          'panel-sidebar-menu__items__single__items__single__link--active'
                        }`}
                      >
                        <span className="panel-sidebar-menu__items__single__items__single__link__title">
                          {subItem.name}
                        </span>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PanelSidebarMenu;
