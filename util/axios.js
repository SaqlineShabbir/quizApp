import axios from 'axios';
const axiosInstance = axios.create({
  baseUrl: process.env.BASE_URL,
});

export default axiosInstance;
