import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const PostCategory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        'https://quiz-app-backend-production-f258.up.railway.app/category/create',
        data
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   responseType: 'json',
        // }
      );
      console.log(res);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-20">
        <p>Add Category</p>
        <form
          className="mx-10 bg-red-50 mt-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-3  border"
            {...register('name', { required: true })}
          />
          <br />

          <input className="py-4 px-16" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PostCategory;
