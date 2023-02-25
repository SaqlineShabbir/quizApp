import React from 'react';
import DashboardLayout from '../../components/dashboard/layout';

const Review = () => {
  return (
    <DashboardLayout>
      <div className="  border rounded  border-[#FFAE96] p-5 min-h-[100vh]">
        <div className="space-y-3 pb-5">
          <h1 className="text-xl font-bold">Give Us A Review</h1>
          <div className="flex justify-center mx-auto ">
            <div>
              <p>star</p>
              <p>star</p>
              <p>star</p>
              <p>star</p>
              <p>star</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-bold">Send us some good words</h1>
          <textarea
            className=" w-full h-[200px] px-3 bg-pink-100 rounded"
            name=""
            id=""
          ></textarea>
          <div className=" flex justify-end">
            <button className="  bg-gradient-to-l from-[#FF6961] py-2 px-10 rounded-full">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Review;
