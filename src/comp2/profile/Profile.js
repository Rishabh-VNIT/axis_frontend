import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileEditForm from "../edit-profile/ProfileEditForm";
import config from "../../config";
const BASE_URL = config.BASE_URL;

const Profile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/signin");
    } else {
      axios
        .get(BASE_URL + "/user/api/profile", {
          headers: { "auth-token": token },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate("/signin");
          } else {
            setError(error.response.data.message || "An error occurred.");
          }
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/signin");
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-xl font-semibold text-red-400">Error</h2>
          <p className="mt-4 text-gray-200">{error}</p>
        </div>
      </div>
    );
  }

  const handleUpdate = (updatedData) => {
    setUser(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-transparent from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy"></div>

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl bg-gray-900 bg-opacity-90 border border-gray-700 shadow-2xl rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
          {isEditing ? (
            <ProfileEditForm
              user={user}
              onUpdate={handleUpdate}
              onCancel={handleCancel}
            />
          ) : (
            <div className="p-8">
              <div className="flex flex-col items-center text-center mb-8 animate-fade-in">
                <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-teal-500 to-green-500 text-white text-7xl font-bold rounded-full transform transition-transform duration-300 hover:scale-110 animate-spin">
                  {user.name ? user.name[0] : '?'}
                </div>
                <h2 className="text-4xl font-extrabold text-gray-100 mt-4">
                  {user.name || 'Your Name'}
                </h2>
                <p className="text-gray-300 text-lg">{user.email || 'your.email@example.com'}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fade-in">
  {[
    { label: 'Points', value: user.points },
    { label: 'Phone Number', value: user.phoneNumber },
    { label: 'Branch', value: user.branch },
    { label: 'LinkedIn Profile', value: user.linkedin },
    { label: 'Address', value: user.address },
    { label: 'College', value: user.collegeName },
    { label: 'City', value: user.collegeCity },
    { label: 'Referral Code', value: user.referral },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in"
    >
      <p className="font-semibold text-gray-300">{item.label}</p>
      <p className="text-gray-400">
        {item.label === 'Points' && item.value === 0 ? '0' : item.value || 'N/A'}
      </p>
    </div>
  ))}
</div>

              <div className="flex justify-around mt-8">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in"
                >
                  Edit
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
