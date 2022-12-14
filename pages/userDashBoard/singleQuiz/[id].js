import Link from 'next/link';
import React, { useEffect, useReducer, useState } from 'react';
import ProgressBar from '../../../components/dashboard/quizUser/questions/ProgressBar';

const reducer = (state, action) => {
  // console.log(action.payLoad.selectAnswer);
  switch (action.type) {
    case 'ANSWERED':
      return state.map((question) => {
        if (question._id === action.payLoad.id) {
          return { ...question, selectAnswer: action.payLoad.selectAnswer };
        } else {
          return question;
        }
      });
    default:
      return state;
  }
};
const SingleQuiz = ({ categoryData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // get selected answer
  const [selected, setSelected] = useState('');
  const initialQuestions = categoryData[0]?.quizs;
  const [questions, dispatch] = useReducer(reducer, initialQuestions);
  const handleAnswer = (id, selectAnswer) => {
    dispatch({
      type: 'ANSWERED',
      payLoad: { id: id, selectAnswer: selectAnswer },
    });
  };

  //handle when user clicks next question
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  };
  // handle when user clicks previous question
  // const prevQuestion = () => {
  //   if (currentQuestion >= 0) {
  //     setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
  //   }
  // };

  // calculate percentage
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  //handle result
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  return (
    <>
      <div>
        <div className="border border-[#FFAE96] rounded lg:mx-40 mx-5 my-10 lg:p-20 p-5">
          <ProgressBar progress={percentage} />
          <p>Question: {questions[currentQuestion]?.question}?</p>
          <div className="py-3  space-y-3">
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'a')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2"
            >
              {questions[currentQuestion]?.a}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'b')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2"
            >
              {questions[currentQuestion]?.b}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'c')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2"
            >
              {questions[currentQuestion]?.c}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'd')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2"
            >
              {questions[currentQuestion]?.d}
            </div>
            <hr className="mt-20" />
          </div>

          <div className="flex  justify-end">
            {/* <button
              disabled={currentQuestion <= 0}
              className="bg-orange-400 border px-3  py-1 rounded-xl"
              onClick={prevQuestion}
            >
              Previous
            </button> */}
            {currentQuestion === questions.length - 1 ? (
              <Link href={'/userDashBoard/result'}>
                <button className="bg-gradient-to-l from-[#FF6961] border  px-3 py-1 rounded-xl">
                  Show Result
                </button>
              </Link>
            ) : (
              <button
                disabled={currentQuestion === questions.length - 1}
                className="border border-[#FFAE96]  px-10 py-1 rounded-xl"
                onClick={nextQuestion}
              >
                next
              </button>
            )}
          </div>
          <p className="pt-10">
            <span className="font-bold">{currentQuestion + 1}</span> Out Of{' '}
            <span className="font-bold">{questions.length}</span> Questions
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleQuiz;
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://quiz-app-backend-production-f258.up.railway.app/category/${context.query.id}`
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
