import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/signin');
    };

    const handleLogout = () => {
        // setLinkText("Log In")
        localStorage.removeItem("auth-token");
        navigate("/signin");
      };

    const token = localStorage.getItem('auth-token');

    return (
        <div className="flex space-x-4">
            {token ? (
                <button
                    onClick={handleLogout}
                    className="py-3 px-3 md:px-5 font-mono text-white  rounded-xl text-sm font-bold border flex"
                >
                    Log Out
                </button>
            ) : (
                <button
                    onClick={handleLogin}
                    className="py-3 px-3 md:px-5 font-mono text-white  rounded-xl text-sm font-bold border flex"
                >
                    Log In
                </button>
            )}
        </div>
    );
};

export default AuthButtons;