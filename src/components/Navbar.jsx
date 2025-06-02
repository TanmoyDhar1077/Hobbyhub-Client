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
      background: "#fff",
      color: "#333",
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
            // confirmButtonColor: "#ff0000",
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
          });
        }
      }
    });
  };

  return (
    <header className="w-full border-b border-[#C6BDBD] fixed bg-white/30 bg-gradient-to-r from-white/30 to-transparent backdrop-blur-[20px] z-50">
      <nav className="w-11/12 lg:w-10/12 mx-auto">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white border border-transparent hover:border-red-500 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="red"
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
                className="flex flex-col gap-3 dropdown-content rounded-box bg-white mt-3 w-52 p-2 shadow"
              >
                <li className="text-[#ff0000]">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-[#ff0000]">
                  <NavLink to="/allGroups">All Groups</NavLink>
                </li>
                <li className="text-[#ff0000]">
                  <NavLink to="/createGroup">Create Group</NavLink>
                </li>
                <li className="text-[#ff0000]">
                  <NavLink to="/myGroups">My Groups</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 md:w-13 h-10 md:h-13 rounded-full"
              />
              <span className="text-2xl md:text-4xl font-bold text-[#ff0000] font-malvie">
                HobbyHub
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 text-xl px-1">
              <li className="text-[#ff0000]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[#ff0000]">
                <NavLink to="/allGroups">All Groups</NavLink>
              </li>
              <li className="text-[#ff0000]">
                <NavLink to="/createGroup">Create Group</NavLink>
              </li>
              <li className="text-[#ff0000]">
                <NavLink to="/myGroups">My Groups</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <button
            onClick={toggleTheme}
            className=" text-[#ff0000] hover:text-black dark:hover:text-white cursor-pointer transition duration-300"
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
                    className="w-10 h-10 rounded-full border-2 border-red-500 cursor-pointer"
                  />
                </div>
                <Tooltip
                  id="my-tooltip"
                  place="bottom"
                  effect="solid"
                  style={{ backgroundColor: "#ffffff", color: "#ff0000" }}
                >
                  <div className="text-sm text-center">
                    <p>{user.displayName || "No name"}</p>
                    <p>{user.email}</p>
                  </div>
                </Tooltip>

                <button
                  onClick={handleLogout}
                  className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] border border-[#ff0000] px-4 py-2 rounded transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] border border-[#ff0000] px-4 py-2 rounded transition duration-300"
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
