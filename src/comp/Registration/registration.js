import "./regi.css";
import AxisLogo from "./axis25(bg removed).png";
// import React from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import config from "../../config";
const BASE_URL = config.BASE_URL;

const termsAndConditionsText = `
1. All proofs you submit should be genuinely authentic, reflecting your utmost knowledge and veracity.
2. Certificates will be granted upon completing the tenure, signifying the individual's accomplished commitment.
3. You are eligible for the certificate and other associated incentives only if your profile is complete.
4. The Certificate as well as all incentives will be awarded only to candidates who meet the minimum points requirement.
5. AXIS'24, VNIT Nagpur will send publicity materials to colleges but is not liable for any additional costs incurred by the CA.
6. AXIS'24, VNIT Nagpur reserves the right to revoke your Ambassadorship or appoint additional ambassadors for unsatisfactory performance or violation of terms.
7. More than one Executive can be selected from a college depending upon the strength of the college.
8. Any use, mention, or placement of AXIS'24 or VNIT Nagpur's logo or name (electronic or physical media) on any event, notice, advertisement, brochure, mailer, or branding material will be done only after written approval from AXIS’24 and VNIT Nagpur authorities and as per their norms. This policy applies in perpetuity.
`;

const TermsAndConditionsModal = ({ onClose }) => {
  // Add your modal content here
  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
      <div className="modal" style={{ background: 'white', padding: '20px', borderRadius: '8px', maxWidth: '80%', maxHeight: '80vh', color: 'black', overflowY: 'auto' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', background: 'none', border: 'none', fontSize: '16px', color: 'red' }}
        >
          &#x2716; {/* Unicode character for a cross mark */}
        </button>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Terms and Conditions For CA</p>
        <div style={{ whiteSpace: 'pre-line' }}>{termsAndConditionsText}</div>
      </div>
    </div>
  );
};

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-2 text-left text-black bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <svg
          className={`w-4 h-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-300 focus:outline-none"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const MyRegi = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [cursorStyle, setCursorStyle] = useState('not-allowed');
  const setAgreedToTermsAndCursor = (value) => {
    setAgreedToTerms(value);
    setCursorStyle(value ? 'pointer' : 'not-allowed');
  };

  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);
  };

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedProfile = localStorage.getItem('profile');
    // Set email in formData if it exists
    if (storedEmail) {
      setFormData(prevFormData => ({ ...prevFormData, email: storedEmail }));
    }
    if (storedProfile) {
      setFormData(prevFormData => ({ ...prevFormData, profile: storedProfile }));
    }
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profile: '',
    collegeName: '',
    collegeState: '',
    collegeCity: '',
    phoneNumber: '',
    branch: '',
    year: '',
    linkedin: '',
    // posts: '',
    address: '',
    ideas: '',
    why: '',
    refral: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.profile);
    // localStorage.removeItem('userEmail');

    try {
      const response = await axios.post(`${BASE_URL}/user/api/register`, formData);
      console.log(response.data); // Registration success message

      // Save the token in local storage
      localStorage.setItem('auth-token', response.data.token);

      // Redirect to the login page after successful registration
      navigate('/');
    } catch (error) {
      console.error(error.response.data); // Registration error message
      setErrorMessage(error.response.data.message); // Set the error message state
    }
  };

  return (
    <div className="reg-container">
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
      {/* <div id="main2" className="full-screen-vanta"></div> */}
      <div className="content-container">
        <main className="relative py-28">
          <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
            <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
              <img src={AxisLogo} alt="" width={300} className="mx-auto" />

              <p className="text-white text-4xl font-semibold sm:text-4xl">
                Get in touch
              </p>
              <p className="text-gray-300 text-xl">
                We'd love to hear from you! Please fill out the form below.
              </p>
            </div>
            <div className="relative text-gray-100 mt-12 mx-auto px-4 p-8 sm:max-w-lg sm:px-8 sm:rounded-xl">
              <div className="absolute inset-0 z-[-1]">
                <div className=" backdrop-blur-sm h-full w-full border rounded-xl"></div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 relative z-10"
              >
                <div className="form-group">
                  <label className="font-medium">
                    <b> Full name</b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="John Dee"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> Phone number </b><span className=" text-red-800">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <select className="text-sm text-black bg-transparent outline-none rounded-lg h-full">
                        <option>IN</option>
                        <option>US</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="9898989898"
                      required
                      className="w-full pl-14 px-3 py-2 text-black outline-none border rounded-lg"
                    />
                  </div>
                </div>

                {/* <div className="form-group">
                  <label className="font-medium">
                    <b> Email address </b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div> */}

                <div className="form-group">
                  <label className="font-medium">
                    <b>University/Institution</b>
                    <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeName" value={formData.collegeName} onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> College State </b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeState" value={formData.collegeState} onChange={handleChange}
                    placeholder="State"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> College City </b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="collegeCity" value={formData.collegeCity} onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> Branch </b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="branch" value={formData.branch} onChange={handleChange}
                    placeholder="Branch"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b>Year of Study</b> <span className="text-red-800">*</span>
                  </label>
                  <CustomDropdown
                    options={['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year']}
                    selectedOption={formData.year ? ` ${formData.year} Year` : 'Select Year'}
                    onSelect={(option) => setFormData({ ...formData, year: option.split(' ')[0] })}
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> LinkedIn Profile </b>
                  </label>
                  <input
                    type="text" name="linkedin" value={formData.linkedin} onChange={handleChange}
                    placeholder="LinkedIn Profile URL"
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>
{/* 
                <div className="form-group">
                  <label className="font-medium">
                    <b> Number of Posts </b>
                  </label>
                  <input
                    type="text" name="posts" value={formData.posts} onChange={handleChange}
                    placeholder="Number of Posts"
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div> */}

                <div className="form-group">
                  <label className="font-medium">
                    <b> Address </b> <span className=" text-red-800">*</span>
                  </label>
                  <input
                    type="text" name="address" value={formData.address} onChange={handleChange}
                    placeholder="Address"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> Ideas </b>
                  </label>
                  <textarea
                    name="ideas" value={formData.ideas} onChange={handleChange}
                    placeholder="Share your ideas"
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> Why should we choose you? </b> <span className=" text-red-800">*</span>
                  </label>
                  <textarea
                    name="why" value={formData.why} onChange={handleChange}
                    placeholder="Tell us why"
                    required
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label className="font-medium">
                    <b> Referral Code </b>
                  </label>
                  <input
                    type="text" name="refral" value={formData.refral} onChange={handleChange}
                    placeholder="Referral Code (if any)"
                    className="w-full mt-2 px-3 py-2 text-black active:bg-white outline-none border focus:border-gray-900 shadow-sm rounded-lg"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTermsAndCursor(e.target.checked)}
                    id="terms-and-conditions"
                    className="mr-2"
                  />
                  <label htmlFor="terms-and-conditions" className="text-gray-700">
                    I agree to the <button type="button" onClick={handleTermsClick} className="underline text-blue-500">Terms and Conditions</button>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  style={{ cursor: cursorStyle }}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </main>
        {showTermsModal && <TermsAndConditionsModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default MyRegi;
