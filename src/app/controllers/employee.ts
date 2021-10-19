import getInstance from '../api/instance';

const EmployeeApi = {
  report: async (params: any) => {
    const instance = getInstance();
    const { data } = await instance.get('/dashuser', { params });

    return data;
  },

  details: async (id: string) => {
    const instance = getInstance();
    const { data } = await instance.get(`/dashuser/${id}`);

    return data;
  },

  create: async (body: models.UserForm) => {
    const instance = getInstance();
    const { data } = await instance.post('/dashuser', body);

    return data;
  },
};

export default EmployeeApi;
