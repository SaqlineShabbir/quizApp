import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import AboutUs from './AboutUs';
import Banner from './Banner';
import UpcomingCourses from './UpcomingCourses';

const Home = () => {
  return (
    <div>
      <div className="bg-pink-100 min-h-[100vh]">
        <Header />
        <Banner />
      </div>
      <div className="">
        <AboutUs />
        <UpcomingCourses />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
