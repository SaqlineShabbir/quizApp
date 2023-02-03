import axios from 'axios';
import React from 'react';
import DashboardLayout from '../../components/dashboard/layout';

const MakeAdmin = ({ users }) => {
  const handleMakeAdmin = async (userId) => {
    console.log(userId);

    await axios
      .put(`https://quiz-app-backend-blond.vercel.app/user/${userId}`, {
        role: 'admin',
      })
      .then((response) => {
        console.log('done');
        console.log(response.data);
      })
      .catch((error) => (error) => {
        console.log(error.message);
      });
  };
  return (
    <DashboardLayout>
      <div className="border border-[#FFAE96] rounded p-5">
        {users.map((user) => (
          <div key={user._id} className="flex   justify-center">
            <div className="flex justify-center border">
              <p className="  p-3">{user?.name}</p>
              <p onClick={() => handleMakeAdmin(user._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default MakeAdmin;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://quiz-app-backend-blond.vercel.app/user');
  const users = await res.json();

  // Pass data to the page via props
  return { props: { users } };
}
