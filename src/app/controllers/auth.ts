import { API_URL, LOGIN_API_URL } from '@portal/config/env';

import getInstance from '../api/instance';

const AuthApi = {
  login: async (user: models.AuthRequest) => {
    const instance = getInstance();
    const { data } = await instance.post('/dashAuth', user);

    return data;
  },

  refreshToken: async (user: any) => {
    const instance = getInstance();
    const { data } = await instance.post('/dashAuth/refresh', user);

    return data;
  },

  logout: async (user: any) => {
    const instance = getInstance();
    const { data } = await instance.post('/dashAuth/revoke', user);

    return data;
  },
};

export default AuthApi;
