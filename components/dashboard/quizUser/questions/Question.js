import React from 'react';
const Question = () => {
  return (
    <div>
      <p>Question:{question.title}</p>
      {question.options.map((option) => {
        console.log(option);
      })}
      {/* <Option options={options} /> */}
    </div>
  );
};

export default Question;
