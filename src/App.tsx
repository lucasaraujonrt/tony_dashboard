import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { useDispatch, useSelector } from 'react-redux';

import Router from './router';
import { checkIsLogged } from '@portal/store/Auth/action';
import { useReduxState } from '@portal/hooks/useReduxState';

const App = () => {
  const dispatch = useDispatch();

  const checkLogged: boolean = useSelector(
    (state: reducers.rootReducer) => state.auth.checkLogged
  );

  let logged = false;
  const isLogged = useReduxState().auth.authToken
  if (isLogged.accessToken) {
    logged = true
  }

  useEffect(() => {
    const handleCheck = () => {
       dispatch(checkIsLogged())
    }
    handleCheck();
  }, [dispatch]);

  return <div>{checkLogged && <Router isLogged={logged} />}</div>;
};

export default App;
