import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../../redux/features/quizs/quizSlice';
const postQuiz = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  console.log(uniqueId);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createQuiz({
        uniqueId,
        title,
        thumbnail,
      })
    );
  };
  return (
    <div className=" my-20">
      <form onSubmit={handleSubmit} className="border mx-20 py-20   px-20">
        <input
          className="border px-4  py-4"
          type="text"
          placeholder="Unique Id"
          onChange={(e) => setUniqueId(e.target.value)}
        />
        <br />
        <input
          className="border px-4  py-4"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="border px-4  py-4"
          type="text"
          placeholder="Thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <br />
        <button className="border  px-5  py-3" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default postQuiz;
// https://i.ibb.co/4VhtcvN/json-server.png
