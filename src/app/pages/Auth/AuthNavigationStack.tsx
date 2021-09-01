import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Login';
// import PasswordRecovery from './PasswordRecovery/PasswordRecovery';
// import ResetPassword from './PasswordRecovery/ResetPassword';
import { useSelector } from 'react-redux';
import Loading from '~/components/Loading/Loading';

const AuthNavigationStack: React.FC = () => {
  const loadingAmount = useSelector(
    (state: reducers.rootReducer) => state.loading.amount
  );
  return (
    <div>
      {(loadingAmount > 0) && <Loading />}
      <Switch>
        <Route
          path="/"
          exact
        >
          <Login />
        </Route>

        {/* <Route
          path="/recuperar-senha"
          exact
        >
          <PasswordRecovery />
        </Route>

        <Route
          path="/alterar-senha"
          exact
        >
          <ResetPassword />
        </Route> */}
      </Switch>
    </div>
  );
};

export default AuthNavigationStack;
