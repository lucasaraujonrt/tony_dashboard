import getInstance from '../api/instance';

const KPIApi = {
  report: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/kpi');

    return data;
  },
};

export default KPIApi;
