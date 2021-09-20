import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMe } from '@portal/store/User/action';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PanelNavigationStack from '~/containers/public/PanelNavigationStack';
import AuthNavigationStack from '~/pages/Auth/AuthNavigationStack';

interface IRouter {
  isLogged: boolean;
}

const Router = ({ isLogged }: IRouter) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(getMe());
    }
  }, [isLogged]);

  console.log('isLogged', isLogged)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {isLogged ? (
            <Route path="/">
              <PanelNavigationStack />
            </Route>
          ) : (
            <Route path="/">
              <AuthNavigationStack />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
