import React from "react";
import useTitle from "../hooks/useTitle";
import Banner from "../components/Banner/Banner";
import WhyJoin from "../components/WhyJoin";
import Testimonials from "../components/Testimonials";
import { useLoaderData } from "react-router";
import Groups from "../components/Groups";
import Newsletter from "../components/Newsletter";


const Home = () => {
  useTitle("Home");
  const groupsData = useLoaderData();
 
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Banner></Banner>
      <WhyJoin></WhyJoin>
      <Groups groupsData={groupsData}></Groups>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
