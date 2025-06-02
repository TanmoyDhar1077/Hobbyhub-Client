import React from "react";
import CountUp from "react-countup";
import { Slide, Flip, Zoom } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto my-12 text-center">
      {/* Section Title */}
      <Slide direction="up" triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] mb-6">
          What Our Members Say
        </h2>
      </Slide>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Flip direction="horizontal" triggerOnce>
          <div className="bg-[#fff5f5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <p className="italic text-gray-700 mb-4">
              “Joining a photography group here pushed me to take my hobby seriously. Now I sell prints!”
            </p>
            <h4 className="font-semibold text-[#ff0000]">— Ayesha K.</h4>
          </div>
        </Flip>

        <Flip direction="vertical" triggerOnce>
          <div className="bg-[#fff5f5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <p className="italic text-gray-700 mb-4">
              “My book club not only made me read more but also helped me find lifelong friends.”
            </p>
            <h4 className="font-semibold text-[#ff0000]">— Tanvir R.</h4>
          </div>
        </Flip>

        <Flip direction="horizontal" triggerOnce>
          <div className="bg-[#fff5f5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <p className="italic text-gray-700 mb-4">
              “I never thought gaming meetups could be this fun and productive. Great platform!”
            </p>
            <h4 className="font-semibold text-[#ff0000]">— Nabil M.</h4>
          </div>
        </Flip>
      </div>

      {/* Stats Section */}
      <Zoom cascade damping={0.2} triggerOnce>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#ff0000]">
              <CountUp end={12000} duration={5} separator="," />+
            </p>
            <p className="text-gray-600">Members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#ff0000]">
              <CountUp end={500} duration={5} separator="," />+
            </p>
            <p className="text-gray-600">Groups Created</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#ff0000]">
              <CountUp end={4.9} duration={7} decimals={1} />★
            </p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#ff0000]">
              <CountUp end={50} duration={6} />+
            </p>
            <p className="text-gray-600">Cities Covered</p>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default Testimonials;

