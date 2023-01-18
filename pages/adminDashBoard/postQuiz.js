import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../components/dashboard/layout';

const PostQuiz = ({ categoryData }) => {
  const [categoryId, setCetegoryId] = useState('');
  const { register, handleSubmit } = useForm();

  //post data to server
  const onSubmit = async (data) => {
    console.log('posting', data);
    try {
      const res = await axios.post(
        `https://quiz-app-backend-production-5339.up.railway.app/quiz/addquiz/${categoryId}`,
        data
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleCategoryId = (catId) => {
    setCetegoryId(catId);
  };
  console.log(categoryId);
  return (
    <DashboardLayout>
      <div className="flex justify-center">
        <div>
          <h2>Choose Category</h2>
          <div className="grid  grid-cols-7 p-6 space-x-5 space-y-5 cursor-pointer">
            {categoryData.map((cat) => (
              <p
                className="bg-purple-200 rounded-full px-5 py-3"
                onClick={() => handleCategoryId(cat._id)}
                key={cat._id}
              >
                {cat.name}
              </p>
            ))}
          </div>

          <form
            className="mx-10  space-y-3 pt-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-3 border"
              placeholder="Question"
              {...register('question', { required: true })}
            />
            <br />
            <input
              className="p-3  border"
              placeholder="a"
              {...register('a', { required: true })}
            />{' '}
            <br />
            <input
              className="p-3  border"
              placeholder="b"
              {...register('b', { required: true })}
            />
            <br />
            <input
              className="p-3  border"
              placeholder="c"
              {...register('c', { required: true })}
            />
            <br />
            <input
              className="p-3   border"
              placeholder="d"
              {...register('d', { required: true })}
            />
            <br />
            <input
              className="p-3  border"
              placeholder="Correct Answer"
              {...register('correctAnswer', { required: true })}
            />
            <br />
            <input
              className="p-3  border"
              placeholder="Explanation"
              {...register('explanation', { required: true })}
            />
            <br />
            <input
              disabled={!categoryId}
              className="border px-20 py-4 bg-purple-300"
              type="submit"
            />
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PostQuiz;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://quiz-app-backend-production-5339.up.railway.app/category/all'
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
