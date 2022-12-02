import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../redux/features/questions/questionSlice';

export default function useFetchQuestions(id) {
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion(id));
  }, [id, dispatch]);
  const { question, isLoading, isError, error } = useSelector(
    (state) => state.question
  );

  return {
    question,
    isLoading,
    isError,
    error,
  };
}
