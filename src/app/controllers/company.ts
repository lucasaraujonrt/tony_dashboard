import getInstance from '../api/instance';

const instance = getInstance();

const CompanyApi = {
  report: async (params: any) => {
    const { data } = await instance.get('/company/paged', { params });

    return data;
  },

  details: async (id: string) => {
    const { data } = await instance.get(`/company/${id}`);

    return data;
  },

  create: async (body: any) => {
    const { data } = await instance.post('/company', body);

    return data;
  },

  getAll: async () => {
    const { data } = await instance.get('/company');

    return data;
  },

  put: async (body: any) => {
    const { data } = await instance.put('/company', body);

    return data;
  },
};

export default CompanyApi;
