import axios from 'axios';
import Image from 'next/image';

import React from 'react';
import DashboardLayout from '../../components/dashboard/layout';

const DeleteCategory = ({ categoryData }) => {
  //delete category
  const handleDelete = async (categoryId) => {
    console.log('deleting', categoryId);

    // DELETE request using axios with async/await

    await axios
      .delete(
        `https://quiz-app-backend-blond.vercel.app/category/${categoryId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => (error) => {
        console.log(error.message);
      });
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-5 border rounded">
        {categoryData?.map((quizCategory) => (
          <div key={quizCategory._id} className="p-3 relative">
            {quizCategory?.postImage && (
              <Image
                className="rounded-xl "
                height={130}
                width={155}
                src={quizCategory?.postImage}
                alt=""
                layout="responsive"
              />
            )}

            <p className=" font-bold cursor-pointer absolute  bottom-8 left-8">
              {quizCategory?.name}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute  top-5 lg:right-12 right-5"
              onClick={() => handleDelete(quizCategory?._id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DeleteCategory;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://quiz-app-backend-blond.vercel.app/category/all'
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
