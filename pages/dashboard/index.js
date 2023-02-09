import Image from 'next/image';
import { useContext } from 'react';
import DashboardLayout from '../../components/dashboard/layout';
import ProgressBar from '../../components/dashboard/quizUser/questions/ProgressBar';
import Quiz from '../../components/dashboard/quizUser/Quiz';
import { AuthContext } from '../../context/AuthProvider';

const DashBoard = ({ categoryData }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <DashboardLayout>
        <div className="border border-[#FFAE96] h-100% p-3 lg:p-5 rounded ">
          <div className="flex">
            <div>
              {user?.photoURL && (
                <Image
                  src={user?.photoURL}
                  alt="user"
                  width={180}
                  height={130}
                />
              )}
            </div>
            <div className="">
              <p className="font-bold text-xl">{user?.displayName}</p>
              <p className="text-green-300">level 2</p>
              <p className="text-[#FFAE96] pb-2">{user?.email}</p>
              <ProgressBar progress={60} />
            </div>
          </div>
          {/* //achievement */}
          <div>
            <div className="lg:flex mt-20  space-x-10">
              <div className="w-1/2 ">
                <p className="font-bold">Achievements</p>
                <div className="pt-3 pl-2">
                  <ProgressBar progress={80} />
                </div>

                <div className="shadow-lg px-5 rounded-lg pb-5">
                  <div className="mt-10 w-[100%]">
                    <p>Quiz Topics</p>
                    <div className="flex mt-3 pb-3">
                      <div className="space-y-2  ">
                        <p>Beginner React Certification</p>
                        <p>Beginner React Certification</p>
                        <p>Beginner React Certification</p>
                        <p>Beginner React Certification</p>
                        <p>Beginner React Certification</p>
                      </div>
                      <div className="space-y-2  pl-10 ">
                        <p>80%</p>
                        <p>70%</p>
                        <p>60%</p>
                        <p>50%</p>
                        <p>40%</p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex justify-center">
                      <button>View All</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* //quiz categoryes */}

              <div className="w-1/2 ">
                <div>
                  <p className="font-bold">Featured Quiz Categories</p>
                </div>
                <div className="grid grid-cols-2 ">
                  {categoryData?.map((quizCategory) => (
                    <Quiz key={quizCategory._id} quizCategory={quizCategory} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashBoard;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://quiz-app-backend-blond.vercel.app/category/all'
  );
  const categoryData = await res.json();

  // Pass data to the page via props
  return { props: { categoryData } };
}
