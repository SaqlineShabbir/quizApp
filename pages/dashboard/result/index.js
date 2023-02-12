import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Index = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  console.log('daaa', data);
  console.log(data?.length);

  useEffect(() => {
    const dataString = localStorage.getItem('questions');
    setData(JSON.parse(dataString));
  }, []);
  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);
  useEffect(() => {
    putUserResult(data?.score, data?.id, user);
  }, [putUserResult, user, data?.score, data?.id]);

  const putUserResult = async (score, id, user) => {
    try {
      const res = await axios.put(
        `https://quiz-app-backend-blond.vercel.app/user/${user?.email}`,
        {
          attainQuizs: {
            id: id,
            score: score,
          },
        }
      );

      console.log(res);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  //loop

  return <div>This is result {data?.score}%</div>;
};

export default Index;
