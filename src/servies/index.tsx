import apiClients from './axios';

export const fetchUser = async () => {
  console.log('fetchUser');
  const response = (await apiClients.get('/user')).data;
  console.log(response);
  return response;
};
