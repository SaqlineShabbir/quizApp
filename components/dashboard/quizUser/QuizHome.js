import React from 'react';
import Quiz from './Quiz';

const QuizHome = ({ categoryData }) => {
  return (
    <div className="border border-[#FFAE96] rounded p-5 h-[88vh]">
      <div className="lg:flex justify-between pb-5">
        <div>
          <p className="text-2xl  font-bold">Select Quiz Topic for Test</p>
          <p className="pb-4">Featured Categories</p>
        </div>
        <div>
          <button className="border bg-gradient-to-l from-[#FF6961] rounded-full px-5 py-3 text-white">
            Explore All Categories
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 ">
        {categoryData?.map((quizCategory) => (
          <Quiz key={quizCategory._id} quizCategory={quizCategory} />
        ))}
      </div>
    </div>
  );
};

export default QuizHome;
