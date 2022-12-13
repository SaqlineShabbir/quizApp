import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Option from '../../../components/dashboard/quizUser/questions/Option';
import ProgressBar from '../../../components/dashboard/quizUser/questions/ProgressBar';
import { fetchQuestion } from '../../../redux/features/questions/questionSlice';

//   useReducer
// const initialState = null;
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'questions':
//       action?.value?.forEach((question) => {
//         question?.options?.forEach((option) => {
//           option.checked = false;
//         });
//       });
//       return action.value;
//     case 'answer':
//       const questions = _.cloneDeep(state);
//       questions[action.questionId].options[action.optionIndex].checked =
//         action.value;
//       return questions;
//     default:
//       return state;
//   }
// };
const SingleQuiz = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion(id));
  }, [id, dispatch]);
  const { question, isLoading, isError, error } = useSelector(
    (state) => state.question
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [qna, dispatch] = useReducer(reducer, initialState);

  // const { question, isLoading, isError, error } = useFetchQuestions(id);
  console.log(question[0]?.questions.length);
  console.log(currentQuestion);
  // console.log('id', question[currentQuiz]?.questions?.[currentQuestion]);

  // useEffect(() => {
  //   dispatch({
  //     type: 'questions',
  //     value: allQuestion,
  //   });
  // }, [dispatch, allQuestion]);

  // handle when user clicks next question
  const nextQuestion = () => {
    if (currentQuestion <= question[0]?.questions?.length - 1) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      localStorage.setItem('current', currentQuestion);
    }

    console.log('......', localStorage.getItem('current'));
  };
  // handle when user clicks previous question
  const prevQuestion = () => {
    if (
      currentQuestion >= 0 &&
      currentQuestion <= question[0]?.questions?.length
    ) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
      localStorage.setItem('current', currentQuestion);
    }

    console.log('......', localStorage.getItem('current'));
  };

  //calculate percentage
  const percentage =
    question[0]?.questions?.length > 0
      ? ((currentQuestion + 1) / question[0]?.questions?.length) * 100
      : 0;
  console.log('percentage', percentage);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>There was an Error</div>}
      {!isLoading && !isError && question.length > 0 && (
        <div>
          <div className="border mx-40 my-10 p-20">
            <ProgressBar progress={percentage} />
            <p>
              Question:{' '}
              {question[0]?.questions[localStorage.getItem('current')]?.title}?
            </p>
            {question[0]?.questions[
              localStorage.getItem('current')
            ]?.options?.map((option) => (
              <Option key={option._id} option={option} />
            ))}
            <button
              className="bg-orange-400 border px-5 py-4  rounded-xl"
              onClick={prevQuestion}
            >
              Previous
            </button>
            <button
              className="bg-orange-400 border px-5 py-4  rounded-xl"
              onClick={nextQuestion}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleQuiz;
