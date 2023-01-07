import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ProgressBar from '../../../components/dashboard/quizUser/questions/ProgressBar';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const SingleQuiz = ({ categoryData }) => {
  const [currentQuiz, setCurrentQuiz] = useLocalStorage('currentQuiz', 0);
  const router = useRouter();
  const id = router.query.id;
  console.log('currentquiz', currentQuiz);
  //
  const singleQuiz = categoryData.find((q) => q._id === id);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(currentQuestion, 'currentQuestion');
  // handle when user clicks next question
  const nextQuestion = () => {
    if (currentQuestion <= singleQuiz?.quizs?.length - 1) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      setCurrentQuiz((prev) => prev + 1);
    }
  };
  // handle when user clicks previous question
  const prevQuestion = () => {
    if (currentQuestion >= 0 && currentQuestion <= singleQuiz?.quizs.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);

      setCurrentQuiz((prev) => prev - 1);
    }
  };

  //calculate percentage
  const percentage =
    singleQuiz.quizs.length > 0
      ? ((currentQuestion + 1) / singleQuiz.quizs.length) * 100
      : 0;

  console.log('currentQ', currentQuestion);
  console.log('length', singleQuiz?.quizs.length);
  return (
    <>
      <div>
        <div className="border mx-40 my-10 p-20">
          <ProgressBar progress={percentage} />
          <p>Question: {singleQuiz?.quizs[currentQuiz]?.question}?</p>
          <div className="py-3  space-y-3">
            <p className="border rounded p-2 bg-blue-50">
              1. {singleQuiz?.quizs[currentQuiz]?.a}
            </p>
            <p className="border rounded p-2 bg-blue-50">
              2. {singleQuiz?.quizs[currentQuiz]?.b}
            </p>
            <p className="border rounded p-2 bg-blue-50">
              3. {singleQuiz?.quizs[currentQuiz]?.c}
            </p>
            <p className="border rounded p-2 bg-blue-50">
              4. {singleQuiz?.quizs[currentQuiz]?.d}
            </p>
          </div>
          <div className="flex  justify-between">
            <button
              disabled={currentQuestion <= 0}
              className="bg-orange-400 border px-3  py-1 rounded-xl"
              onClick={prevQuestion}
            >
              Previous
            </button>
            <button
              disabled={currentQuestion === singleQuiz.quizs.length}
              className="bg-orange-400 border  px-3 py-1 rounded-xl"
              onClick={nextQuestion}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://quiz-app-backend-production-f258.up.railway.app/category/all'
  );
  const categoryData = await res.json();
  console.log(categoryData);

  // Pass data to the page via props
  return { props: { categoryData } };
}
