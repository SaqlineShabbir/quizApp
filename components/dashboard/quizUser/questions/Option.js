import React from 'react';

const Option = ({ option }) => {
  return (
    <div>
      <p className="bg-pink-100 p-3 m-2">{option?.title}</p>
    </div>
  );
};

export default Option;
