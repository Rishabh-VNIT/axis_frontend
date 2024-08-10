import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const BASE_URL = config.BASE_URL;

const AuthButtons = () => {
  const navigate = useNavigate();  // Get navigate function

  const handleLogout = () => {
    // setLinkText("Log In")
    localStorage.removeItem("auth-token");
    navigate("/");
  };


  useEffect(() => {
    const loadGoogleScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve(window.google);
        document.head.appendChild(script);
      });
    };

    loadGoogleScript()
      .then((google) => {
        google.accounts.id.initialize({
          client_id:
            "980813792244-vv3fo17c297pehpsu9b582m5536uctvc.apps.googleusercontent.com", // Replace with your actual Client ID
          callback: (response) => handleCredentialResponse(response, navigate), // Pass navigate here
        });

        google.accounts.id.renderButton(
          document.getElementById("sign-in-button"),
          { theme: "outline", size: "large" } // Customize button style
        );

        google.accounts.id.prompt(); // Show the One Tap UI if appropriate
      })
      .catch((error) => {
        console.error("Google Sign-In script failed to load:", error);
      });
  }, [navigate]);  // Add navigate as a dependency

  const handleCredentialResponse = async (response, navigate) => {
    // Handle the response, typically you would send it to your backend for verification
    const token = response.credential;
    const decodedToken = jwtDecode(token);

    // Print the decoded token to the console
    console.log(`Email :- ${decodedToken.email}`);
    console.log(`Picture :- ${decodedToken.picture}`);
    try {
      // Send the POST request
      const res = await axios.post(`${BASE_URL}/user/api/check-email`, {
        email: decodedToken.email,
        profilePic: decodedToken.picture,
      });

      // Handle the response from the server
      console.log("Response:", res.data);
      if (!res.data.exists) {
        localStorage.setItem('userEmail', decodedToken.email);
        localStorage.setItem('profile', decodedToken.picture);
        navigate("/signup");  // Navigate to a different route if the user does not exist
      }
      else {
        const email = decodedToken.email;
        const response = await axios.post(`${BASE_URL}/user/api/login`, { email });
        console.log(response.data);
        localStorage.setItem('auth-token', response.data.token);
        navigate('/profile');
      }
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };

  const token = localStorage.getItem('auth-token');
  if (token) {
    return <>
      <button
        onClick={handleLogout}
        className="py-3 px-3 md:px-5 font-mono text-white  rounded-xl text-sm font-bold border flex"
      >
        Log Out
      </button>
    </>
  }
  return (
    <div>
      <div id="sign-in-button"></div>
    </div>
  );
};

export default AuthButtons;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthButtons = () => {
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         navigate('/signin');
//     };

//     const handleLogout = () => {
//         // setLinkText("Log In")
//         localStorage.removeItem("auth-token");
//         navigate("/signin");
//       };

//     const token = localStorage.getItem('auth-token');

//     return (
//         <div className="flex space-x-4">
//             {token ? (
//                 <button
//                     onClick={handleLogout}
//                     className="py-3 px-3 md:px-5 font-mono text-white  rounded-xl text-sm font-bold border flex"
//                 >
//                     Log Out
//                 </button>
//             ) : (
//                 <button
//                     onClick={handleLogin}
//                     className="py-3 px-3 md:px-5 font-mono text-white  rounded-xl text-sm font-bold border flex"
//                 >
//                     Log In
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AuthButtons;