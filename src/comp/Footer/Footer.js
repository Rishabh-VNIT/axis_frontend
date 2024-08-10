// Footer.js
import React from 'react';
import './f.css';
import AxisLogo from './axis25(bg removed).png'; // Path to the image file
import Yt from './youtube.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="container px-5 py-5 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="/">
              <img className="w-auto h-12" src={AxisLogo} alt="" />
            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <a href="/" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>

              <a href="/" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>

              {/* <a href="/" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a> */}

              {/* <a href="/" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a> */}

              {/* <a href="/" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a> */}
            </div>

          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright by AXIS 2025. All Rights Reserved.</p>

            <div className="flex -mx-2">
              <a href="https://instagram.com/axis_vnit?igshid=NzZlODBkYWE4Ng==" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="instagram">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Instagram SVG Path */}
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </svg>
              </a>

              <a href="https://youtube.com/@AXISVNIT?si=WHjiEUddY0mSD9du" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <img className="" height="1.25em" viewBox="0 0 448 512" style={{ fill: 'white', width: '28px', height: '23px' }} src={Yt} alt='' />
              </a>

              <a href="https://www.linkedin.com/company/axis-vnit-nagpur/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIN">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512" style={{ fill: 'white', width: '18px', height: '24px' }}>
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;