import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../../../redux/features/quizs/quizSlice';
import Quiz from './Quiz';

const QuizHome = ({ data }) => {
  console.log('okkk', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const { allQuiz } = useSelector((state) => state.quiz);
  return (
    <div className="border p-5 h-[88vh]">
      <div className="flex justify-between pb-5">
        <div>
          <p className="text-2xl  font-bold">Select Quiz Topic for Test</p>
          <p className="pb-4">Featured Categories</p>
        </div>
        <button className="lg:px-14 bg-orange-500  rounded-full">
          Explore All Categories
        </button>
      </div>
      <div className="grid grid-cols-5 ">
        {allQuiz?.data?.map((quiz) => (
          <Quiz key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizHome;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch.get('/api/quiz');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
