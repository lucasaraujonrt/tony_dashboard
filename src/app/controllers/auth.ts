import { API_URL, LOGIN_API_URL } from '@portal/config/env';

import getInstance from '../api/instance';

const AuthApi = {
  login: async (user: models.AuthRequest) => {
    const instance = getInstance();
    const { data } = await instance.post('/auth', user);

    return data;
  },

  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${API_URL}/user/me`);

    return data;
  },

  refreshToken: async (user: any) => {
    const instance = getInstance();
    const { data } = await instance.post(`${LOGIN_API_URL}/refresh`, user);

    return data;
  },
};

export default AuthApi;
