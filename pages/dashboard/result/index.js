import { useState } from "react";
import { useEffect } from "react";

const Index = () => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const dataString = localStorage.getItem("questions");
    setData(JSON.parse(dataString));
  }, []);

  //result calculation
  let score = 0;
  // calculate answer
  data?.forEach((element) => {
    if (element?.correctAnswer === element?.selectAnswer) {
      score = score + 5;
    }
  });
  return <div>This is result {score}</div>;
};

export default Index;
