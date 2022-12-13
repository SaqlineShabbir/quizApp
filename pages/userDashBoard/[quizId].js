import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../assets/images/Cap.PNG';
import DashboardLayout from '../../components/dashboard/layout';
import { fetchQuiz } from '../../redux/features/quizs/quizSlice';
const QuizDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);
  const router = useRouter();
  const quizId = router.query.quizId;
  const { allQuiz } = useSelector((state) => state.quiz);

  const singleQuiz = allQuiz?.data?.find((q) => q.quizId === quizId);
  console.log(singleQuiz);

  return (
    <DashboardLayout>
      <div className="border h-[88vh]  p-5">
        <div className="flex ">
          <Image
            className="rounded "
            height={150}
            width={202}
            src={img}
            alt=""
          />
          <div className="ml-5">
            <p className="text-3xl">{singleQuiz?.title}</p>
            <p>Read the following instructions carefully</p>
            <p className="text-orange-400">
              0 People Participated in this test
            </p>
          </div>
        </div>
        {/* //cards */}
        <div className="flex  mt-10">
          <div className="bg-pink-200 p-5 rounded-xl w-[200px]">
            <p className="font-bold">Total Questions</p>
            <p className="text-3xl">20</p>
          </div>
          <div className="bg-pink-200 p-5 rounded-xl w-[200px] mx-5">
            <p className="font-bold">Time Per Question</p>
            <p className="text-3xl">30 sec</p>
          </div>
          <div className="bg-pink-200 p-5 rounded-xl w-[200px]">
            <p className="font-bold">Marks Per Question</p>
            <p className="text-3xl">5 Marks</p>
          </div>
        </div>

        {/* instructions */}
        <div className="flex justify-between mt-12">
          <div className="w-[60%]">
            {' '}
            <p className="text-xl font-bold">Other Instructions</p>
            <p>
              Timing - You need to complete each of your attempts in one
              sitting, as you are allotted 30 minutes to each attempt.
              <br />
              <br /> Answers - You may review your answer-choices and compare
              them to the correct answers after your final attempt.
              <br />
              <br /> To start, click the Start button. When finished, click the
              Submit button.
            </p>
            <br />
            <p className="text-red-400">
              Note: You have to get at least 80% marks to achieve a certifcate
              of completion.
            </p>
            <br />
            <Link href={`/userDashBoard/singleQuiz/${quizId}`}>
              <button className="border rounded-full py-4 px-10 bg-orange-400">
                Start quiz
              </button>
            </Link>
          </div>

          <div className="bg-pink-100 rounded-lg w-[25%]  flex justify-center py-8">
            <div>
              <p className="font-bold">Our Scoring System</p>
              <p className="bg-pink-300 p-2 rounded-xl mt-2">Below 80% - F</p>
              <p className="bg-pink-300 p-2 rounded-xl mt-2">Above 80% - B+</p>
              <p className="bg-pink-300 p-2 rounded-xl mt-2">Above 90% - A</p>
              <p className="bg-pink-300 p-2 rounded-xl mt-2">100% - A+</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QuizDetails;
