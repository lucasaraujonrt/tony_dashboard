import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { useDispatch, useSelector } from 'react-redux';

// import * as AuthActions from '~/actions/auth';

import Router from './router';

const App = () => {
  const dispatch = useDispatch();
  // const checkLogged: boolean = useSelector(
  //   (state: reducers.rootReducer) => state.auth.checkLogged
  // );

  // const isLogged: boolean = useSelector(
  //   (state: reducers.rootReducer) =>
  //     (state.auth.authToken && state.auth.authToken.token && true) || false
  // );

  // useEffect(() => dispatch(AuthActions.checkIsLogged()), []);

  return <div><Router isLogged={false} /></div>;
};

export default App;
