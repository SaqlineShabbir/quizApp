import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../../assets/images/user.PNG';
import DashboardLayout from '../../components/dashboard/layout';
import { AuthContext } from '../../context/AuthProvider';
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  console.log('userdata', userData);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.put(
        `https://quiz-app-backend-blond.vercel.app/user/${user?.email}`,
        {
          ...data,
        }
      );
      reset();
      console.log(res);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser(user?.email);
  }, [user]);

  const getUser = async (email) => {
    try {
      const res = await axios.get(
        `https://quiz-app-backend-blond.vercel.app/user/${email}`
      );

      setUserData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="  border rounded  border-[#FFAE96]">
        <div className="px-7 py-4">
          <h1 className="font-bold">My Profile</h1>
          <div className="flex  justify-between pt-5 ">
            <Image src={img} height={100} width={100} alt="Profile" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
              <div>
                <p className="text-sm">Full Name (Name Can Be Changed Once)</p>
                <input
                  className="border px-2 py-2 lg:w-[400px] w-[300px] rounded bg-pink-100"
                  type="text"
                  placeholder={userData[0]?.name}
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <p className="text-sm">
                  Email Address (Email Can’t Be Changed)
                </p>
                <input
                  className="border px-2 py-2  lg:w-[400px] w-[300px] rounded bg-pink-100"
                  type="text"
                  placeholder={userData[0]?.email}
                  disabled
                />
              </div>
              <div>
                <p className="text-sm">Phone</p>
                <input
                  className="border px-2 py-2 w-full lg:w-[400px] rounded bg-pink-100"
                  type="text"
                  placeholder={userData[0]?.phone}
                  {...register('phone', { required: false })}
                />
              </div>
              <div className=" flex justify-end">
                <button className="  bg-gradient-to-l from-[#FF6961] py-2 px-10 rounded-full">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UpdateProfile;

// export async function getServerSideProps(context) {
//   console.log('con con', context.query);
//   // Fetch data from external API
//   const res = await fetch(
//     `https://quiz-app-backend-blond.vercel.app/user/sakib125@gmail.com`
//   );
//   const expectedUser = await res.json();

//   // Pass data to the page via props
//   return { props: { expectedUser } };
// }

// useEffect(() => {
//   window.history.pushState(null, null, window.location.href);
//   window.onpopstate = function () {
//     window.history.go(1);
//   };
// }, []);
