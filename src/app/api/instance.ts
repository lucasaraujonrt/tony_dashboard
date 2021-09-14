import { message } from 'antd';
import Axios, { AxiosResponse } from 'axios';
import * as StorageService from '~/services/storage';
import { translate } from '~/services/i18n';

import { API_URL } from '@portal/config/env';
import { handleAxiosError } from '@portal/services/api';

const axiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 100000,
});


axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (err) => {
    if (err.response.status === 401) {
      try {
        StorageService.getItem('session-token');
        // await storeCreator.dispatch(AuthActions.refreshToken(payload));
        window.location.reload();
        await Axios(err.config);
      } catch (e) {
        // StorageService.removeItem('session-token');
      }
    } else if (err.response.status === 403) {
      message.error(translate('errors.instance.login'));
      handleAxiosError(err);
    }

    return Promise.reject(handleAxiosError(err));
  }
);

export const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export function getInstance() {
  if (
    StorageService.getItem('session-token') &&
    StorageService.getItem('session-token').token
  ) {
    setAuthorizationHeader(StorageService.getItem('session-token').token);
  } else {
    setAuthorizationHeader('undefined');
  }
  return axiosInstance;
}

export default getInstance;
