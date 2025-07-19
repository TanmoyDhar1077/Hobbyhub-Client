import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
      background: isDark ? "#1f2937" : "#fff",
      color: isDark ? "#fff" : "#333",
      iconColor: "#ff0000",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await logout();
          Swal.fire({
            title: "Logged out!",
            text: "You have been successfully logged out.",
            icon: "success",
            showConfirmButton: false,
            iconColor: "#7fdf4b",
            background: isDark ? "#1f2937" : "#fff",
            color: isDark ? "#fff" : "#333",
            timer: 2000,
          });
          navigate("/");
        } catch (error) {
          Swal.fire({
            title: "Logout Failed",
            text: "An error occurred during logout.",
            icon: "error",
            confirmButtonColor: "#ff0000",
            showConfirmButton: true,
            background: isDark ? "#1f2937" : "#fff",
            color: isDark ? "#fff" : "#333",
          });
        }
      }
    });
  };

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-700 fixed bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 transition-colors duration-300">
      <nav className="w-11/12 lg:w-10/12 mx-auto">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200 dark:border-gray-600 hover:border-red-500 lg:hidden transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="flex flex-col gap-3 dropdown-content rounded-box bg-white dark:bg-gray-800 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-600 transition-colors duration-300"
              >
                <li>
                  <NavLink
                    to="/"
                    className="text-[#ff0000] dark:text-white hover:underline"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allGroups"
                    className="text-[#ff0000] dark:text-white hover:underline"
                  >
                    All Groups
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/createGroup"
                    className="text-[#ff0000] dark:text-white hover:underline"
                  >
                    Create Group
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myGroups"
                    className="text-[#ff0000] dark:text-white hover:underline"
                  >
                    My Groups
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 md:w-13 h-10 md:h-13 rounded-full"
              />
              <span className="hidden sm:inline text-2xl md:text-4xl font-bold text-[#ff0000] dark:text-white font-malvie">
                HobbyHub
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 text-xl px-1">
              <li className="text-[#ff0000] dark:text-white">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[#ff0000] dark:text-white">
                <NavLink to="/allGroups">All Groups</NavLink>
              </li>
              <li className="text-[#ff0000] dark:text-white">
                <NavLink to="/createGroup">Create Group</NavLink>
              </li>
              <li className="text-[#ff0000] dark:text-white">
                <NavLink to="/myGroups">My Groups</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[#ff0000] dark:text-white hover:text-red-600 dark:hover:text-red-20`0 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
              aria-pressed={isDark ? "true" : "false"}
              title="Toggle Theme"
            >
              {isDark ? <FaSun size={25} /> : <FaMoon size={25} />}
            </button>
            {user ? (
              <>
                {/* Tooltip with photo */}
                <div data-tooltip-id="my-tooltip">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-red-500 cursor-pointer dark:border-gray-400 transition-all duration-300 hover:scale-105"
                  />
                </div>
                <Tooltip
                  id="my-tooltip"
                  place="bottom"
                  effect="solid"
                  style={{ 
                    backgroundColor: isDark ? "#374151" : "#ffffff", 
                    color: "#ff0000",
                    border: isDark ? "1px solid #4b5563" : "1px solid #e5e7eb"
                  }}
                >
                  <div className="text-sm text-center">
                    <p className="dark:text-gray-300">{user.displayName || "No name"}</p>
                    <p className="dark:text-gray-300">{user.email}</p>
                  </div>
                </Tooltip>

                <button
                  onClick={handleLogout}
                  className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] dark:hover:bg-gray-800 dark:hover:text-white border border-[#ff0000] px-4 py-2 rounded transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] dark:hover:bg-gray-800 dark:hover:text-white border border-[#ff0000] px-4 py-2 rounded transition duration-300"
              >
                SignUp/SignIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
