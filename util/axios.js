import axios from 'axios';
const axiosInstance = axios.create({
  baseUrl: 'https://quiz-app-backend-production-5339.up.railway.app',
});

export default axiosInstance;
