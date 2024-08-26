import React, { useState } from "react";
import GradientWrapper from "../../comp/Gradient";
import NavLink from "../Navlink/Navlink";
import Ab from "../Ab-aim/Ab-aim";
import { useNavigate } from "react-router-dom";
import AuthButtons from "../Login-Logout button/button"; // Import the AuthButtons component

const Hero = () => {
  const [showAbaim, setShowAbaim] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAbaim((prevShowAbaim) => !prevShowAbaim);
  };

  const token = localStorage.getItem('auth-token');
  console.log("token = " + token);
  if (token) {
    return <></>;
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
                Program
              </span>
            </h1>
            <p className="max-w-xl text-white mx-auto">
              Be our mascot for AXIS, the Largest Technical Fest by VNIT NAGPUR
              in your college and city, by joining AXIS's Campus Ambassador
              Program
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
              <button
                onClick={handleLearnMoreClick}
                className="flex items-center gap-x-2 text-white hover:text-gray-500 border border-white py-2 px-4 rounded-full"
              >
                {showAbaim ? "Show Less" : "Learn More..."}
              </button>
            </div>

            {showAbaim && <Ab />}
            <div className="mt-5 flex justify-center">
              <div style={{ maxWidth: '200px' }}>
              <AuthButtons />
              </div>
            </div>
          </div>
        </GradientWrapper>
      </section>
    </div>
  );
};

export default Hero;
