import axios from '../../../util/axios';

export const postQuestion = async (data) => {
  const response = await axios.post(`/api/question`, data);
  console.log(data);

  return response;
};

export const getQuestion = async (id) => {
  const response = await axios.get(`/api/question?quizId=${id}`);
  console.log('res from que', response.data);
  return response.data;
};
