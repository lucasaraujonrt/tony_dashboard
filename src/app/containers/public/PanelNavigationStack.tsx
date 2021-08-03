import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { getRoutes, getStackPath } from '~/config/routes';

// components
import PanelContentTopBar from '~/components/PanelContentTopBar/PanelContentTopBar';
import PanelSidebar from '~/components/PanelSidebar/PanelSidebar';

//stacks
import UserNavigationStack from '~/pages/User/UserNavigationStack';
import NotFound from '~/pages/NotFound/NotFound';

const PanelNavigationStack: React.FC = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const loggedUser = useSelector(
    (state: reducers.rootReducer) => state.auth.me
  );

  return (
    <div className="panel-navigation-stack">
      <div className="panel-navigation-stack__sidebar">
        <PanelSidebar routes={getRoutes()} />
      </div>

      <div className="panel-navigation-stack__content">
        <PanelContentTopBar user={loggedUser} />
        <Switch>

          <Route path={getStackPath('USER')}>
            <UserNavigationStack />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </div>
  );
};

export default PanelNavigationStack;
