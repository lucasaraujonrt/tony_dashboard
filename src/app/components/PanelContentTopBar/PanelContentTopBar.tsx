import React, { useEffect } from 'react';
import { useReduxState } from '@portal/hooks/useReduxState';
import { Popover } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import UserIcon from '~/assets/svg/ic_user.svg';
import { translate } from '~/services/i18n';

interface IProps {
  user?: models.User | null;
}

const PanelContentTopBar: React.FC<IProps> = (props: IProps) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onLogout = () => {
    // dispatch(AuthActions.logout());
  };

  return (
    <div className="panel-content-top-bar">
      <div className="panel-content-top-bar__menu">
        <div
          className={`panel-content-top-bar__menu__item ${pathname === '/dashboard/detalhes'
            ? 'panel-content-top-bar__menu__item--active'
            : ''
            }`}
        >
          <Link
            className="panel-content-top-bar__menu__item__link"
            to={'/dashboard/detalhes'}
          >
            <span className="panel-content-top-bar__menu__item__link__title">
              {translate(
                'COMPONENTS.PANEL_CONTENT_TOP_BAR.PAGES.DASHBOARD.TITLE'
              )}
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
                {props.user?.name}
              </span>
            </span>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(AuthActions.logout()),
});

export default connect(null, mapDispatchToProps)(PanelContentTopBar);
