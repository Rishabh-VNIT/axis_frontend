import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './l.css';
import config from "../../config";
const BASE_URL = config.BASE_URL;

const ProfileEditForm = ({ user, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    linkedin: user.linkedin || '',
    address: user.address || '',
    collegeCity: user.collegeCity || '',
    collegeName: user.collegeName || '',
    phoneNumber: user.phoneNumber || '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('auth-token');
      await axios.put(`${BASE_URL}/user/api/edit-profile`, formData, {
        headers: {
          'auth-token': token,
        },
      });
      onUpdate(formData); // Notify parent component about the update
      navigate('/profile'); // Navigate to /profile
      window.location.reload(); // Reload the /profile route

    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error
    }
  };

  return (
    <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl max-w-md mx-auto border border-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 animate-gradient-xy"></div>
      <h2 className="text-3xl mb-6 text-center font-extrabold text-gray-100 relative z-10">Edit Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 font-semibold mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-300 font-semibold mb-1">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-gray-300 font-semibold mb-1">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="collegeName" className="text-gray-300 font-semibold mb-1">College:</label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="collegeCity" className="text-gray-300 font-semibold mb-1">City:</label>
            <input
              type="text"
              id="collegeCity"
              name="collegeCity"
              value={formData.collegeCity}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-gray-300 font-semibold mb-1">LinkedIn:</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transform transition-transform duration-300 hover:scale-105"
          >
            Update Profile
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transform transition-transform duration-300 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
