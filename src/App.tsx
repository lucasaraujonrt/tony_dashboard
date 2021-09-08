import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { useDispatch, useSelector } from 'react-redux';

import Router from './router';
import { checkIsLogged } from '@portal/store/Auth/action';

const App = () => {
  const dispatch = useDispatch();

  const checkLogged: boolean = useSelector(
    (state: reducers.rootReducer) => state.auth.checkLogged
  );

  const isLogged: boolean = useSelector(
    (state: reducers.rootReducer) =>
      (state.auth.authToken && state.auth.authToken.token && true) || false
  );

  useEffect(() => void dispatch(checkIsLogged()), []);

  return <div>{checkLogged && <Router isLogged={isLogged} />}</div>;
};

export default App;
