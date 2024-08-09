import './Si.css';
import AxisLogo from './Axis.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import config from "../../config";
const BASE_URL = config.BASE_URL;

const MyFunction = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      navigate('/profile'); 
    }
  }, [navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/user/api/login`, formData);
      console.log(response.data);
      localStorage.setItem('auth-token', response.data.token);
      
      navigate('/profile');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="si-container">
      <div className="content-container">
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
          <div className="max-w-sm w-full p-8 border rounded-xl text-gray-600 space-y-5">
            <div className="text-center pb-1">
              <img
                src={AxisLogo} alt='Logo'
                width={220}
                className="mx-auto"

              />
              <div className="mt-2">
                <h3 className="text-white text-2xl font-bold sm:text-3xl">
                  Log in to your account
                </h3>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-group">
                <label className="font-medium text-white"><b>Email</b></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='abc@gmail.com'
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div className="form-group">
                <label className="font-medium text-white"><b>Password</b></label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='********'
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <a
                  href="/"
                  className="text-center text-teal-600 hover:text-indigo-500"
                >
                  {/* Forgot password? */}
                </a>
              </div>
              <button type="submit" className="w-full border px-4 py-2 text-white font-medium bg-transparent hover:bg-green-600 rounded-lg duration-150">
                <b>Sign in</b>
              </button>
            </form>
            <p className="text-center flex items-center justify-around text-white">
              Don't have an account?
              <a
                href="/signup"
                className="font-medium text-white hover:text-green-600"
              >
                <b>Sign up!</b>
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyFunction;