import { router } from 'next/router';
import axiosInstance from '../util/axios';
export const useEverything = () => {
  //everything  about user
  const postUser = async (data) => {
    const response = await axiosInstance.post('/api/register', data);
    console.log(response);
    if (response?.data?.email) {
      router.push('/userDashBoard');
    }
    return response;
  };
  const loginUser = async (data) => {
    const response = await axios.post('/api/login', data);
    console.log('from login', response);
    if (response.data.email) {
      router.push('/userDashBoard');
    }

    localStorage.setItem('loggedInUser', JSON.stringify(response.data));
    return response;
  };
  const getUsers = async () => {
    const response = await axios.get('/api/register');
    return response;
  };

  return {
    postUser,
    loginUser,
  };
};
