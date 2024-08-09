import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyFunction = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Function to logout and navigate to "/"
        const logoutAndNavigate = async () => {
            // Clear the auth token from localStorage (assuming it's synchronous)
            localStorage.removeItem('auth-token');
            // Navigate to the home page ("/")
            navigate('/');
        };

        logoutAndNavigate(); // Call the logout function

        // No need to return anything from useEffect
    }, []); // Dependency array ensures useEffect runs once on mount

    return null; // or you can return any loading indicator if needed
};

export default MyFunction;
