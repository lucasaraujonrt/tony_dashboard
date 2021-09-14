import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { getRoutes, getStackPath } from '~/config/routes';

// components
import PanelContentTopBar from '~/components/PanelContentTopBar/PanelContentTopBar';
import PanelSidebar from '~/components/PanelSidebar/PanelSidebar';
import UserNavigationStack from '@portal/pages/User/UserNavigationStack';
import CompanyNavigationStack from '@portal/pages/Company/CompanyNavigationStack';
import ServiceCallNavigationStack from '@portal/pages/ServiceCall/ServiceCallNavigationStack';

const PanelNavigationStack: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const loggedUser = useSelector(
  //   (state: reducers.rootReducer) => state.auth.me
  // );

  const mock: models.User = {
    id: '1',
    name: 'Lucas',
    email: 'lucasaraujo8186@gmail.com',
    password: '123123',
  };

  return (
    <div className="panel-navigation-stack">
      <div className="panel-navigation-stack__sidebar">
        <PanelSidebar routes={getRoutes()} />
      </div>

      <div className="panel-navigation-stack__content">
        <PanelContentTopBar user={mock} />
        <Switch>
          <Route path={getStackPath('USER')}>
            <UserNavigationStack />
          </Route>

          <Route path={getStackPath('COMPANY')}>
            <CompanyNavigationStack />
          </Route>

          <Route path={getStackPath('SERVICE_CALL')}>
            <ServiceCallNavigationStack />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PanelNavigationStack;
