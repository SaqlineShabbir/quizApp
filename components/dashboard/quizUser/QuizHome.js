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
        <button className="lg:px-14 bg-orange-500  rounded-full">
          Explore All Categories
        </button>
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
