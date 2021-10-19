import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import thunk from 'redux-thunk';

import authReducer from './Auth/reducer';
import loadingReducer from './Loading/reducer';
import userReducer from './User/reducer';
import serviceCallReducer from './ServiceCall/reducer';
import companyReducer from './Company/reducer';
import employeeReducer from './Employee/reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
  loading: loadingReducer,
  auth: authReducer,
  user: userReducer,
  serviceCall: serviceCallReducer,
  company: companyReducer,
  employee: employeeReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const storeCreator = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export default storeCreator;
