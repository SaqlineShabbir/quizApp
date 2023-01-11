import React from 'react';
import Quiz from './Quiz';

const QuizHome = ({ categoryData }) => {
  console.log('okkk', categoryData);

  return (
    <div className="border p-5 h-[88vh]">
      <div className="flex justify-between pb-5">
        <div>
          <p className="text-2xl  font-bold">Select Quiz Topic for Test</p>
          <p className="pb-4">Featured Categories</p>
        </div>
        <div>
          <button className="border bg-gradient-to-l from-[#FF6961] rounded-full lg:px-5 lg:py-3">
            Explore All Categories
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 ">
        {categoryData?.map((quizCategory) => (
          <Quiz key={quizCategory._id} quizCategory={quizCategory} />
        ))}
      </div>
    </div>
  );
};

export default QuizHome;
