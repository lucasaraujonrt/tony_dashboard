import getInstance from '../api/instance';

const ServiceCallApi = {
  report: async (params: any) => {
    const instance = getInstance();
    const { data } = await instance.get('/serviceCall/paginated', { params });

    return data;
  },

  reportAll: async (params?: any) => {
    const instance = getInstance();
    const { data } = await instance.get('/serviceCall', { params });

    return data;
  },

  updateStatus: async (body?: any) => {
    const instance = getInstance();
    const { data } = await instance.put('/serviceCall', body);

    return data;
  },

  details: async (id: string) => {
    const instance = getInstance();
    const { data } = await instance.get(`/serviceCall/${id}`);

    return data;
  },
};

export default ServiceCallApi;
