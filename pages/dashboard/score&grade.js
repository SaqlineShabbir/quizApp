import React from 'react';
import DashboardLayout from '../../components/dashboard/layout';

const ScoreGrade = () => {
  return (
    <DashboardLayout>
      <div className="  border rounded  border-[#FFAE96]">
        <div className="flex justify-between px-5  my-5">
          <p className="font-bold text-xl">Summary</p>
          <div className="group hidden items-center ml-1 relative w-full md:flex lg:w-72">
            <div className="absolute block cursor-pointer flex items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden">
              <svg
                fill="none"
                className="h-5 relative w-5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <svg
              className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              className="border border-orange-300 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Search"
            />
          </div>
        </div>
        {/* //cards */}
        <div className="grid lg:grid-cols-3 space-y-5 lg:space-y-0 mt-10 mx-5">
          <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px]">
            <p className="font-bold">Total Questions</p>
            <p className="text-2xl text-[#FF6A64]">5</p>
          </div>
          <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px] ">
            <p className="font-bold">Time Per Question</p>
            <p className="text-2xl  text-[#FF6A64]">30 sec</p>
          </div>
          <div className="bg-[#FFF0EF] p-5 rounded-xl lg:w-[200px]">
            <p className="font-bold">Marks Per Question</p>
            <p className="text-2xl text-[#FF6A64]">5 Marks</p>
          </div>
        </div>
        {/* topics */}
        <div className="shadow shadow-lg my-10 rounded-lg mx-5">
          <div className="  flex px-7  space-x-12">
            <div className="py-5">
              <p className="text-lg pb-2 ">Quiz Topics</p>
              <div className="space-y-2">
                <p>1. Beginner React Certification</p>
                <p>2. Beginner React Certification</p>
                <p>3. Beginner React Certification</p>
                <p>4. Beginner React Certification</p>
                <p>5. Beginner React Certification</p>
              </div>
            </div>
            {/* 2 */}
            <div className="py-5">
              <p className="text-lg pb-2 ">Test Attempts</p>
              <div className="space-y-2">
                <p>3 Attempts</p>
                <p>3 Attempts</p>
                <p>3 Attempts</p>
                <p>3 Attempts</p>
                <p>3 Attempts</p>
              </div>
            </div>
            {/* 3 */}
            <div className="py-5">
              <p className="text-lg pb-2 ">Score Rate (%)</p>
              <div className="space-y-2">
                <p>80%</p>
                <p>80%</p>
                <p>80%</p>
                <p>80%</p>
                <p>80%</p>
              </div>
            </div>
            {/* 4 */}
            <div className="py-5">
              <p className="text-lg pb-2 ">Grade</p>
              <div className="space-y-2">
                <p>B+</p>
                <p>B+</p>
                <p>B+</p>
                <p>B+</p>
                <p>B+</p>
              </div>
            </div>
            {/* 5 */}
            <div className="py-5">
              <p className="text-lg pb-2 ">Certifications</p>
              <div className="space-y-2">
                <p>Available</p>
                <p>Available</p>
                <p>Available</p>
                <p>Available</p>
                <p>Available</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex  justify-center  py-5">
            <button>View All</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScoreGrade;
