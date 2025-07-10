import React, { useContext } from "react";
import Swal from "sweetalert2";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Fade, Zoom } from "react-awesome-reveal";

const Newsletter = () => {
  const { user } = useContext(AuthContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#ff0000",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `${user?.displayName || "User"}! You have successfully subscribed to our newsletter.`,
      timer: 2000,
      showConfirmButton: false,
      iconColor: "#7fdf4b",
    });

    e.target.reset();
  };

  return (
    <section className="w-11/12 md:w-10/12 mx-auto my-12 text-center">
      <Zoom triggerOnce>
        <div className="flex justify-center mb-4">
          <FaEnvelopeOpenText className="text-4xl text-[#ff0000]" />
        </div>
      </Zoom>

      <Fade direction="left" cascade damping={0.1} triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] mb-2">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Stay updated with the latest hobby trends, groups, and special offers.
          No spam!
        </p>
      </Fade>

      <Fade direction="right" delay={300} triggerOnce>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-80 rounded border border-gray-300 focus:outline-[#ff0000] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:outline-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-[#ff0000] text-white px-6 py-2 rounded hover:bg-white hover:text-[#ff0000] border border-[#ff0000] transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </Fade>
    </section>
  );
};

export default Newsletter;
