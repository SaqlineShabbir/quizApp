import { router } from 'next/router';
import axios from '../../../util/axios';

export const postUser = async (data) => {
  const response = await axios.post('/api/register', data);
  console.log(response);
  if (response?.data?.email) {
    router.push('/userDashBoard');
  }
  return response;
};
export const login = async (data) => {
  const response = await axios.post('/api/login', data);
  console.log('from login', response);
  if (response.data.email) {
    router.push('/userDashBoard');
  }

  localStorage.setItem('loggedInUser', JSON.stringify(response.data));
  return response;
};
export const getUsers = async () => {
  const response = await axios.get('/api/register');
  return response;
};
