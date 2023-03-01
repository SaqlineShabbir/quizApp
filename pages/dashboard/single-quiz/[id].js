import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import ProgressBar from '../../../components/dashboard/quizUser/questions/ProgressBar';
import { AuthContext } from '../../../context/AuthProvider';

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
  const { user } = useContext(AuthContext);

  const router = useRouter();
  const { id } = router.query;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //timer
  const [seconds, setSeconds] = useState(30);
  const [countDown, setCountDown] = useState(30);
  const timerId = useRef();
  console.log(id);
  // get selected answer
  const [selected, setSelected] = useState('');
  const initialQuestions = categoryData[0]?.quizs;
  const [questions, dispatch] = useReducer(reducer, initialQuestions);
  console.log('qqqq', questions);
  //handle answers  here
  const handleAnswer = (id, selectAnswer) => {
    dispatch({
      type: 'ANSWERED',
      payLoad: { id: id, selectAnswer: selectAnswer },
    });
    setSelected(selectAnswer);
  };

  //handle when user clicks next question
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
    setCountDown(30);
    setSelected('');
  };
  //result calculation
  let score = 0;
  // calculate answer
  questions?.forEach((element) => {
    if (element?.correctAnswer === element?.selectAnswer) {
      score = score + (5 / (questions?.length * 5)) * 100;
    }
  });

  // calculate percentage
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  //handle result
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify({ id, score, questions }));
  }, [score, id, questions]);

  // handle timer
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countDown === 0) {
      clearInterval(timerId.current);
      router.push('/dashboard/result');
    }
  });
  //put user results to  backend
  const handlePutUserInfo = async (score, id, user) => {
    try {
      const res = await axios.put(
        `https://quiz-app-backend-blond.vercel.app/user/${user?.email}`,
        {
          attainQuizs: {
            id: id,
            score: score,
          },
        }
      );

      console.log('response from id  page', res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <div className="border border-[#FFAE96] rounded lg:mx-40 mx-5 my-10 lg:p-20 p-5">
          <div className="flex justify-end text-2xl  pb-4">
            <p>Timer: {countDown}</p>
          </div>
          <ProgressBar progress={percentage} />
          <p>Question: {questions[currentQuestion]?.question}?</p>
          <div className="py-3  space-y-3">
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'a')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
            >
              {questions[currentQuestion]?.a}
              {/* //select icon */}
              {selected === 'a' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'b')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
            >
              {questions[currentQuestion]?.b}
              {selected === 'b' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'c')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between"
            >
              {questions[currentQuestion]?.c}
              {selected === 'c' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </div>
            <div
              onClick={() => handleAnswer(questions[currentQuestion]?._id, 'd')}
              className="bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2  flex justify-between"
            >
              {questions[currentQuestion]?.d}
              {selected === 'd' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
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
              <Link href={'/dashboard/result'}>
                <button
                  onClick={() => handlePutUserInfo(score, id, user)}
                  className="bg-gradient-to-l from-[#FF6961] border  px-3 py-1 rounded-xl"
                >
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
    `https://quiz-app-backend-blond.vercel.app/category/${context.query.id}`
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
