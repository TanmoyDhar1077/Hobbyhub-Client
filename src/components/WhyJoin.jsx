import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaUsers, FaSmile, FaBrain } from "react-icons/fa";

const WhyJoin = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto my-12">
      <Fade cascade direction="down" triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff0000] dark:text-white mb-10">
          Why Join a Hobby Group?
        </h2>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Slide direction="left" triggerOnce>
          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-600">
            <FaUsers className="text-4xl text-[#ff0000] dark:text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Meet New People</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Connect with like-minded individuals who share your passion and enthusiasm. You'll find opportunities to form meaningful connections, learn from others, and grow in your chosen field or hobby.
            </p>
          </div>
        </Slide>

        <Slide direction="up" triggerOnce>
          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-600">
            <FaBrain className="text-4xl text-[#ff0000] dark:text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Learn and Grow</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Enhance your skills, knowledge, and creativity by participating regularly. Our platform provides a wealth of resources and opportunities to help you continuously expand your horizons and reach your full potential.
            </p>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-600">
            <FaSmile className="text-4xl text-[#ff0000] dark:text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Stay Happy</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Reduce stress and boost mental health through enjoyable group activities. These interactions provide a valuable outlet for relaxation, helping you unwind and recharge, ultimately contributing to a happier, healthier you.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default WhyJoin;

