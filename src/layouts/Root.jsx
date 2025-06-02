import React, { use } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const Root = () => {
  const {loading} = use(AuthContext)

   if (loading) {
    return <Spinner />; 
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
