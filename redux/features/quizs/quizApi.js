import axios from '../../../util/axios';

export const postQuiz = async (data) => {
  const response = await axios.post('/api/quiz', data);
  console.log(data);

  return response;
};

export const getQuiz = async () => {
  const response = await axios.get('/api/quiz');
  console.log(response);
  return response;
};
