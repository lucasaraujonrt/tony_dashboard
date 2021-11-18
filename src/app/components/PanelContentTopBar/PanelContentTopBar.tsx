import React from 'react';
import { Popover } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import * as AuthActions from '@portal/store/Auth/action';
import UserIcon from '~/assets/svg/ic_user.svg';
import { translate } from '~/services/i18n';
import { useDispatch } from 'react-redux';
import { useReduxState } from '@portal/hooks/useReduxState';

interface IProps {
  user?: models.User | null;
}

const PanelContentTopBar: React.FC<IProps> = (props: IProps) => {
  const { pathname } = useLocation();
  const { me } = useReduxState().user;
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(AuthActions.logout());
  };

  return (
    <div className="panel-content-top-bar">
      <div className="panel-content-top-bar__menu">
        <div
          className={`panel-content-top-bar__menu__item ${
            pathname === '/kpi/detalhes'
              ? 'panel-content-top-bar__menu__item--active'
              : ''
          }`}
        >
          <Link
            className="panel-content-top-bar__menu__item__link"
            to={'/kpi/detalhes'}
          >
            <span className="panel-content-top-bar__menu__item__link__title">
              {translate('COMPONENTS.PANEL_CONTENT_TOP_BAR.PAGES.KPI.TITLE')}
            </span>
          </Link>
        </div>

        <div
          className={`panel-content-top-bar__menu__item ${
            pathname === '/kanban/detalhes'
              ? 'panel-content-top-bar__menu__item--active'
              : ''
          }`}
        >
          <Link
            className="panel-content-top-bar__menu__item__link"
            to={'/kanban/detalhes'}
          >
            <span className="panel-content-top-bar__menu__item__link__title">
              {translate('PAGES.PANEL.KANBAN.TITLE')}
            </span>
          </Link>
        </div>
      </div>

      <div className="panel-content-top-bar__right">
        <div className="panel-content-top-bar__right__user-dropdown">
          <Popover
            placement="bottomRight"
            content={
              <div
                onClick={onLogout}
                className="panel-content-top-bar__right__user-dropdown__logout"
              >
                {translate(
                  'COMPONENTS.PANEL_CONTENT_TOP_BAR.PAGES.DASHBOARD.LOGOUT'
                )}
              </div>
            }
          >
            <span className="panel-content-top-bar__right__user-dropdown__wrapper">
              <span className="panel-content-top-bar__right__user-dropdown__thumb">
                <img
                  className="panel-content-top-bar__right__user-dropdown__thumb__image"
                  src={UserIcon}
                  alt={'user'}
                />
              </span>
              <span className="panel-content-top-bar__right__user-dropdown__name">
                {me && me.name}
              </span>
            </span>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default PanelContentTopBar;
