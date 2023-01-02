import { useState } from 'react';

export const useEverything = () => {
  const [right, setRight] = useState(true);
  return {
    right,
  };
};
