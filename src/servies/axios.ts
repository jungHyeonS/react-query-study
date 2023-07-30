import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://test.com`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

const apiClients = createAxiosInstance();

apiClients.interceptors.request.use((config) => {
  return config;
});

apiClients.interceptors.response.use((response) => {
  return response;
});

export default apiClients;
