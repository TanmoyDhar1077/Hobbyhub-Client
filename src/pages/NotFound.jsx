import React from "react";
import error from "../assets/images/error.svg";
import { Link } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6 bg-white dark:bg-gray-900">
      <img src={error} alt="Error" className="w-full max-w-md mb-4" />
      <h2 className="text-[#ff0000] dark:text-white text-3xl md:text-4xl font-bold">
        404 Page Not Found!
      </h2>
      <p className="text-[#ff0000] dark:text-gray-300 text-lg md:text-xl max-w-xl">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn flex items-center gap-2 bg-white text-[#ff0000] hover:bg-[#ff0000] hover:text-white border border-[#ff0000] dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-600 px-4 py-2 rounded transition duration-300"
      >
        <IoArrowBack size={20} />
        <span>Go back to Home</span>
      </Link>
    </section>
  );
};

export default NotFound;
