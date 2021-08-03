import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ptLocale from 'date-fns/locale/pt-BR';
import { Settings } from 'luxon';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from 'react-redux-i18n';

import { LANGUAGE, WL_COMPANY_PRIMARY_COLOR } from '~/config/env';

import App from './App';
import languages from './app/i18n';
import createStore from './app/store/createStore';
import './app/styles/index.less';
import reportWebVitals from './reportWebVitals';

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const store = createStore;

syncTranslationWithStore(store);
store.dispatch(loadTranslations(languages));
store.dispatch(setLocale(LANGUAGE));

Settings.defaultLocale = LANGUAGE;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: WL_COMPANY_PRIMARY_COLOR,
    },
  },
}, ptBR);

const localeMap = {
  pt: ptLocale,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap.pt}>
            <App />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
