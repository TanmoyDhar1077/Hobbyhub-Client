import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="py-18 lg:py-24 bg-red-50 dark:bg-gray-950 dark:text-white">
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="w-[45px] md:w-[60px]" />
          <h2 className="text-2xl md:text-4xl font-bold text-[#ff0000] dark:text-white font-malvie">
            HobbyHub
          </h2>
        </div>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-12 text-gray-700 dark:text-gray-300 text-lg font-medium ">
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
        <hr className="w-[330px] md:w-[660px] lg:w-[1061px] border-t border-gray-300 dark:border-gray-700"></hr>
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.facebook.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0C27.9411 0 36 8.05889 36 18C36 27.9411 27.9411 36 18 36C8.05889 36 0 27.9411 0 18C0 8.05889 8.05889 0 18 0Z"
                fill="url(#paint0_linear_10_1447)"
              />
              <path
                d="M20.3385 35.8491V21.9456H24.2582L24.7778 17.0522H20.3385L20.3451 14.6028C20.3451 13.3265 20.4664 12.643 22.2996 12.643H24.7503V7.74878H20.8297C16.1205 7.74878 14.4632 10.1225 14.4632 14.1149V17.0526H11.5276V21.9464H14.4632V35.652C15.6068 35.8798 16.7892 36.0002 17.9997 36.0002C18.7818 36.0002 19.563 35.9498 20.3385 35.8491Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_1447"
                  x1="18"
                  y1="-0.327978"
                  x2="18"
                  y2="37.535"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00B2FF" />
                  <stop offset="1" stopColor="#006AFF" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="https://x.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clipPath="url(#clip0_10_1450)">
                <path d="M0 0H36V36H0V0Z" fill="#0F0F0F" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5004 9H8.25L15.6607 18.7886L8.72408 27H11.929L17.1754 20.7894L21.834 26.9428H28.0844L20.4584 16.8698L20.4719 16.8872L27.038 9.11431H23.8331L18.9569 14.8866L14.5004 9ZM11.7001 10.7143H13.6459L24.6343 25.2285H22.6885L11.7001 10.7143Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_1450">
                  <rect width="36" height="36" rx="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.NavLinkedin.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clipPath="url(#clip0_10_1454)">
                <path
                  d="M18 0C8.05879 0 0 8.05879 0 18C0 27.9411 8.05879 35.9999 18 35.9999C27.9411 35.9999 36 27.9411 36 18C35.9999 8.05879 27.941 0 18 0ZM13.1975 26.7021H9.24546V13.9341H13.1975V26.7021ZM11.2027 12.262C9.91196 12.262 8.86562 11.2072 8.86562 9.90611C8.86562 8.60492 9.91211 7.55012 11.2027 7.55012C12.4932 7.55012 13.5396 8.60492 13.5396 9.90611C13.5396 11.2072 12.4933 12.262 11.2027 12.262ZM28.0079 26.7021H24.075V20C24.075 18.1618 23.3768 17.1357 21.9233 17.1357C20.3414 17.1357 19.5149 18.2043 19.5149 20V26.7021H15.7244V13.9341H19.5149V15.6537C19.5149 15.6537 20.6551 13.5446 23.3625 13.5446C26.0699 13.5446 28.008 15.1978 28.008 18.6176L28.0079 26.7021Z"
                  fill="url(#paint0_linear_10_1454)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_10_1454"
                  x1="5.27206"
                  y1="5.27206"
                  x2="30.7279"
                  y2="30.7279"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2489BE" />
                  <stop offset="1" stopColor="#0575B3" />
                </linearGradient>
                <clipPath id="clip0_10_1454">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clipPath="url(#clip0_10_1457)">
                <path
                  d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
                  fill="#FF0000"
                />
                <path
                  d="M20.4963 18.007L15.5037 20.9036V15.0962L20.4963 18.007Z"
                  fill="url(#paint0_linear_10_1457)"
                />
                <path
                  d="M35.6565 21.5099C34.962 24.9949 33.2525 28.1968 30.7429 30.7127C28.2334 33.2286 25.0358 34.9462 21.5525 35.6494L9.92358 24.0204C10.5508 24.5094 11.3239 24.7737 12.1191 24.7712H23.8996C24.8488 24.7687 25.7582 24.3897 26.4282 23.7175C27.0983 23.0452 27.4742 22.1346 27.4736 21.1854V14.8144C27.4764 13.8817 27.1143 12.9849 26.4646 12.3157L35.6565 21.5099Z"
                  fill="url(#paint1_linear_10_1457)"
                />
                <path
                  d="M23.8903 11.229H12.1098C11.639 11.229 11.1728 11.3218 10.7379 11.502C10.303 11.6822 9.90787 11.9464 9.57509 12.2794C9.24231 12.6124 8.9784 13.0077 8.79846 13.4427C8.61851 13.8778 8.52606 14.344 8.52637 14.8148V21.1858C8.52606 21.6566 8.61851 22.1229 8.79846 22.5579C8.9784 22.9929 9.24231 23.3882 9.57509 23.7212C9.90787 24.0542 10.303 24.3184 10.7379 24.4986C11.1728 24.6789 11.639 24.7716 12.1098 24.7716H23.8903C24.3611 24.7716 24.8273 24.6789 25.2622 24.4986C25.6971 24.3184 26.0922 24.0542 26.425 23.7212C26.7578 23.3882 27.0217 22.9929 27.2016 22.5579C27.3816 22.1229 27.474 21.6566 27.4737 21.1858V14.8148C27.474 14.344 27.3816 13.8778 27.2016 13.4427C27.0217 13.0077 26.7578 12.6124 26.425 12.2794C26.0922 11.9464 25.6971 11.6822 25.2622 11.502C24.8273 11.3218 24.3611 11.229 23.8903 11.229ZM15.5037 20.904V15.0966L20.4964 18.0003L15.5037 20.904Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_10_1457"
                  x1="14.5729"
                  y1="16.027"
                  x2="18.5234"
                  y2="19.9799"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B71C1C" />
                  <stop offset="1" stopColor="#B71C1C" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_10_1457"
                  x1="16.9767"
                  y1="16.9578"
                  x2="30.7373"
                  y2="30.7159"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B71C1C" />
                  <stop offset="1" stopColor="#B71C1C" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_10_1457">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
