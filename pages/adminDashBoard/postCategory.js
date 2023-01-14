import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import FileBase64 from "react-file-base64";
import { useState } from "react";

const PostCategory = () => {
  const { register, handleSubmit } = useForm();
  const [postImage, setPostImage] = useState();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/category/create", {
        ...data,
        postImage,
      });
      console.log(res);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(postImage);

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
            placeholder="Enter Category Name"
            {...register("name", { required: true })}
          />
          {postImage && (
            <div className="w-1/5">
              <img src={postImage} alt="photo" />
            </div>
          )}
          <br />
          <FileBase64
            multiple={true}
            onDone={(pic) => setPostImage(pic[0]?.base64)}
          />
          <br />
          <input
            className="mt-3 py-4 px-16 bg-teal-500 btn rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default PostCategory;
