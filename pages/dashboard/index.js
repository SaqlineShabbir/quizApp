import Image from 'next/image';
import { useContext } from 'react';
import DashboardLayout from '../../components/dashboard/layout';
import ProgressBar from '../../components/dashboard/quizUser/questions/ProgressBar';
import { AuthContext } from '../../context/AuthProvider';

const DashBoard = ({ categoryData }) => {
  const { user, information } = useContext(AuthContext);

  // filter how many quiz test user took
  const exactUserInformation = information?.filter(
    (info) => info?.email === user?.email
  );
  return (
    <>
      <DashboardLayout>
        <div className="border border-[#FFAE96] min-h-[100vh] p-3 lg:p-5 rounded  ">
          <div className="flex">
            <div className="pr-2">
              {user?.photoURL && (
                <Image
                  className="rounded-lg"
                  src={user?.photoURL}
                  alt="user"
                  width={200}
                  height={150}
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
            <div className="lg:flex mt-20  lg:space-x-10">
              <div className="lg:w-1/2 ">
                <div className="flex ">
                  <p className="font-bold  pb-2">Achievements</p>
                  <div className="pt-3 pl-2">
                    {/* <ProgressBar progress={80} /> */}
                  </div>
                </div>

                <div className=" px-5 rounded-lg pb-5 border lg:w-[900px]">
                  <div className="mt-10 ">
                    <p className="font-bold">Quiz Topics</p>
                    <div className="flex mt-3 pb-3 my-20">
                      <div className="space-y-2  ">
                        {exactUserInformation?.map((ex) => (
                          <p key={ex._id}>{ex?.quizCategoryName}</p>
                        ))}
                      </div>
                      <div className="space-y-2  pl-10 ">
                        {exactUserInformation?.map((ex) => (
                          <p key={ex._id}>{ex?.score}%</p>
                        ))}
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

              {/* <div className="w-1/2 lg:my-0 my-8">
                <div>
                  <p className="font-bold">Featured Quiz Categories</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-0 px-10">
                  {categoryData?.slice(0, 4).map((quizCategory) => (
                    <div key={quizCategory._id} className="p-3 relative">
                      {quizCategory?.postImage && (
                        <div className="">
                          <Image
                            className="rounded-xl "
                            height={100}
                            width={105}
                            src={quizCategory?.postImage}
                            alt=""
                          />
                        </div>
                      )}

                     
                    </div>
                  ))}
                </div>
              </div> */}
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
