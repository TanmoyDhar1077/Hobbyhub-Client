import React, { use, useState } from "react";
import signUpImg from "../assets/images/signup.svg";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../hooks/useTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  useTitle("Register");
  const { googleSignIn, signIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    photoURL: "",
    password: "",
    gender: "male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL, email, password } = formData;

    //  Password validation
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUpper || !hasLower || !hasMinLength) {
      let errorMsg = "Password must contain:\n";
      if (!hasUpper) errorMsg += "- At least one uppercase letter\n";
      if (!hasLower) errorMsg += "- At least one lowercase letter\n";
      if (!hasMinLength) errorMsg += "- At least 6 characters\n";
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: errorMsg,
      });
      return;
    }

    try {
      const result = await signIn(email, password);

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });

      const user = result.user;
      // console.log(user);

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: `Welcome, ${name}`,
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

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
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
        });
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:flex items-center justify-center bg-red-100">
            <img src={signUpImg} alt="SignUp" className="w-full max-w-md" />
          </div>
          <div className="p-10">
            <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">
              Create Account
            </h1>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white border border-red-300 shadow-sm py-2 rounded-md text-red-500 hover:bg-red-500 hover:text-white mb-6 cursor-pointer transition duration-200"
            >
              <FaGoogle /> Sign Up with Google
            </button>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
              />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                value={formData.photoURL}
                onChange={handleChange}
                required
                className="w-full border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} className="text-red-400" />
                  ) : (
                    <FaEye size={20} className="text-red-400" />
                  )}
                </span>
              </div>

              <div className="flex gap-6 text-red-500 text-sm">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />{" "}
                  Other
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] border border-[#ff0000] px-4 py-2 rounded transition duration-300 cursor-pointer"
              >
                Register
              </button>

              <p className="text-black text-sm mt-2">
                Already have an account?{" "}
                <span
                  className="text-red-500 hover:underline cursor-pointer"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
