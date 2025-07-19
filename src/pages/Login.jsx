import React, { useState, use } from "react";
import signIn from "../assets/images/login.svg";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../hooks/useTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  useTitle("Login");
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, login } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
          background: document.documentElement.classList.contains('dark') ? "#1f2937" : "#fff",
          color: document.documentElement.classList.contains('dark') ? "#fff" : "#333",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
          background: document.documentElement.classList.contains('dark') ? "#1f2937" : "#fff",
          color: document.documentElement.classList.contains('dark') ? "#fff" : "#333",
        });
      });
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome back ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
          background: document.documentElement.classList.contains('dark') ? "#1f2937" : "#fff",
          color: document.documentElement.classList.contains('dark') ? "#fff" : "#333",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
          background: document.documentElement.classList.contains('dark') ? "#1f2937" : "#fff",
          color: document.documentElement.classList.contains('dark') ? "#fff" : "#333",
        });
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 lg:px-0 py-22 lg:py-0">
        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 border border-gray-200 dark:border-gray-600">
          <div className="md:flex items-center justify-center bg-red-100 dark:bg-gray-700">
            <img src={signIn} alt="SignIn Logo" className="w-full max-w-md" />
          </div>
          <div className="p-10">
            <h1 className="text-3xl font-bold text-red-500 dark:text-white mb-6 text-center">
              Sign In
            </h1>
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-red-300 dark:border-gray-600 shadow-sm py-2 rounded-md text-red-500 dark:text-white hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white mb-6 cursor-pointer transition duration-200"
            >
              <FaGoogle /> Log in with Google
            </button>
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border text-red-500 dark:text-white border-red-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-400 p-2 rounded-md placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full text-red-500 dark:text-white border border-red-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-red-300 dark:focus:ring-red-400 p-2 rounded-md placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} className="text-red-400 dark:text-white" />
                  ) : (
                    <FaEye size={20} className="text-red-400 dark:text-white" />
                  )}
                </span>
              </div>
              <div className="flex md:flex-col lg:flex-row justify-between text-sm text-red-500 mt-1">
                <button
                  type="button"
                  className="hover:underline cursor-pointer text-start"
                >
                  Forgot Password?
                </button>
                <p className="text-black dark:text-gray-300">
                  Create a new account?{" "}
                  <span
                    type="button"
                    onClick={() => navigate("/signup")}
                    className="hover:underline cursor-pointer text-red-500 dark:text-white"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] dark:hover:bg-gray-700 dark:hover:text-white border border-[#ff0000] px-4 py-2 rounded transition duration-300 cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
