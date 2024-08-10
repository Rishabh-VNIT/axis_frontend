// ./comp/Navbar/Navbar.js

import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Nv.css";
import AxisLogo from "./axis25(bg removed).png";
import { useNavigate } from "react-router-dom";
import AuthButtons from "../Login-Logout button/button";
import { ProfileIcon } from "../Profile Icon/ProfileIcon";
// DefaultNavbar Component
const DefaultNavbar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="content backdrop-blur-lg sticky">
      <div className="block md:hidden">
        <br />
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <a href="/">
              <img
                loading="lazy"
                src={AxisLogo}
                width="90px"
                alt="Axis Logo"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-10 text-white font-mullish font-medium">
              <li className="hover:text-blue-500">
                <HashLink smooth to="#abam">About</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#whats">What's in it?</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#res">Responsibilities</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#faqs">FAQs</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#contact">Contact us!</HashLink>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex space-x-6">
            <ProfileIcon />
            <ul className="flex space-x-6">
              <li>
                <AuthButtons />
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center space-x-6">
            <ProfileIcon />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isExpanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="md:hidden text-white bg-gray-800 bg-opacity-25 p-4 rounded-lg">
            <ul className="flex flex-col mt-2 space-y-2">
              <li className="hover:text-blue-500">
                <HashLink smooth to="#abam">About</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#whats">What's in it?</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#respo">Responsibilities</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#faqs">FAQs</HashLink>
              </li>
              <li className="hover:text-blue-500">
                <a href="/leaderboard">Leader-board</a>
              </li>
              <li className="hover:text-blue-500">
                <HashLink smooth to="#contact">Contact us!</HashLink>
              </li>
            </ul>
            <div className="flex flex-col items-center mt-4">
              {/* <ProfileIcon /> */}
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// SimplifiedNavbar Component
const SimplifiedNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="backdrop-blur-sm top-0 z-50">
      <div className="block md:hidden">
        <br />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <a href="/">
              <img
                loading="lazy"
                src={AxisLogo}
                width="125px"
                height="30px"
                alt="Axis Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <ProfileIcon />
            <ul className="flex space-x-6">
              <li>
                <AuthButtons />
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center space-x-6">
            <ProfileIcon />
            <div className="flex flex-row space-x-1">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { DefaultNavbar, SimplifiedNavbar };
