import React, { useEffect, useState } from 'react';

const ReviewQuiz = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const dataString = localStorage.getItem('questions');
    setData(JSON.parse(dataString));
  }, []);
  return (
    <div>
      {data?.questions?.map((question) => (
        <div key={question._id} className=" lg:mx-40 mx-5 my-5  p-5">
          <p>Question: {question?.question}?</p>
          <div className="py-3  space-y-3">
            <div
              className={`bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between ${
                question.correctAnswer &&
                question.selectAnswer === 'a' &&
                'bg-green-300'
              }`}
            >
              {question?.a}
              {/* //select icon */}
            </div>
            <div
              className={`bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between ${
                question.correctAnswer &&
                question.selectAnswer === 'b' &&
                'bg-green-300'
              }`}
            >
              {question?.b}
            </div>
            <div
              className={`bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between ${
                question.correctAnswer &&
                question.selectAnswer === 'c' &&
                'bg-green-300'
              }`}
            >
              {question?.c}
            </div>
            <div
              className={`bg-[#F0F8FF] border border-[#84C5FE] py-1 px-2 flex justify-between ${
                question.correctAnswer &&
                question.selectAnswer === 'd' &&
                'bg-green-300'
              }`}
            >
              {question?.d}
            </div>
            <hr className="mt-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewQuiz;
