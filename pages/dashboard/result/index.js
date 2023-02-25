import axios from 'axios';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import { ImSad2 } from 'react-icons/im';
import { AuthContext } from '../../../context/AuthProvider';
const Index = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

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
  }, [user, data?.score, data?.id]);

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

  return (
    <div className="flex justify-center my-20">
      <div>
        {data?.score >= 80 ? (
          <div>
            <FaMedal size={100} color="#FFAE96" className="mt-1" />
            <p className="font-bold"> Congratulations you have passed</p>
          </div>
        ) : (
          <div>
            <ImSad2 size={100} color="#FFAE96" className="mt-1" />
            <div className="flex  justify-center">
              <p className="font-bold">
                Were Sorry You failed to Score above 80%
              </p>
            </div>
          </div>
        )}
        <div className="pr-20">You Scored {data?.score}%</div>

        <Link href="/dashboard/result/review-quiz">
          <button className="my-20 font-bold text-sm">Review Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
