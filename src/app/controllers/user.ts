import getInstance from '../api/instance';

const UserApi = {
  report: async (params: any) => {
    const instance = getInstance();
    const { data } = await instance.get('/user', { params });

    return data;
  },

  details: async (id: string) => {
    const instance = getInstance();
    const { data } = await instance.get(`/user/${id}`);

    return data;
  },

  create: async (body: models.UserForm) => {
    const instance = getInstance();
    const { data } = await instance.post('/user', body);

    return data;
  },

  put: async (body: any) => {
    const instance = getInstance();
    const { data } = await instance.put('/user', body);

    return data;
  },

  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/dashUser/me');

    return data;
  },
};

export default UserApi;
