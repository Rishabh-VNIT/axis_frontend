import React, { useState } from "react";
import GradientWrapper from "../../comp/Gradient";
import NavLink from "../Navlink/Navlink";
import Ab from "../Ab-aim/Ab-aim";

const Hero = () => {
  const [showAbaim, setShowAbaim] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAbaim((prevShowAbaim) => !prevShowAbaim);
  };

  const token = localStorage.getItem('auth-token');
  console.log("token = " + token);
  if (token) {
    return <></>
  }
  return (
    <div>
      <section>
        <GradientWrapper
          wrapperClassName="inset-0"
          className="custom-screen text-gray-600"
        >
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-white font-extrabold mx-auto sm:text-6xl">
              Campus Ambassador<br></br>{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
                Program
              </span>
            </h1>
            <p className="max-w-xl text-white mx-auto">
              Be our mascot for AXIS, the Largest Technical Fest by VNIT NAGPUR
              in your college and city, by joining AXIS's Campus Ambassador
              Program
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
              {/* {token ? <></> :
                <NavLink
                  href="/signup"
                  className="flex items-center gap-x-2 text-white hover:text-gray-500 border border-white py-2 px-4 rounded-full"
                >
                  Register
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>} */}
              <button
                onClick={handleLearnMoreClick}
                className="flex items-center gap-x-2 text-white hover:text-gray-500 border border-white py-2 px-4 rounded-full"
              >
                {showAbaim ? "Show Less" : "Learn More..."}
              </button>
            </div>

            {showAbaim && <Ab />}
          </div>
        </GradientWrapper>
      </section>
    </div>
  );
};

export default Hero;
