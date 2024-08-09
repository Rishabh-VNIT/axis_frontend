import axios from "axios";
import config from "../../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = config.BASE_URL;


function ProfileIcon() {
    const [user, setUser] = useState('');
    const token = localStorage.getItem('auth-token');
    const navigate = useNavigate();

    function handleClick() {
        navigate("/profile");
    }

    useEffect(() => {
        const fetchProfileIcon = async () => {
            if (token) {
                try {
                    const response = await axios.get(`${BASE_URL}/user/api/profile-icon`, {
                        headers: {
                            'auth-token': token
                        }
                    });
                    console.log(response);
                    setUser(response.data.user.toUpperCase());
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchProfileIcon();
    }, [token]);

    if (!token) {
        return <></>
    }

    return (
        <>
            <div
                className="profile-icon flex items-center justify-center w-12 h-12 bg-transparent text-white text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={handleClick}
                style={{ userSelect: 'none' }} // Add this style to make the content non-selectable
            >
                {user}
            </div>


            <style jsx>
                {`
    .profile-icon {
        border: 3px solid transparent;
        animation: subtleBorderAnimation 3s infinite;
    }

    @keyframes subtleBorderAnimation {
        0% {
            border-color: rgba(0, 0, 255, 0.5);
            box-shadow: 0 0 8px rgba(0, 0, 255, 0.5);
        }
        50% {
            border-color: rgba(0, 255, 255, 0.5);
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
        }
        100% {
            border-color: rgba(0, 0, 255, 0.5);
            box-shadow: 0 0 8px rgba(0, 0, 255, 0.5);
        }
    }

    .profile-icon:hover {
        animation: none;
        border-color: rgba(0, 255, 255, 0.8);
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.8);
    }
`}
            </style>


        </>


    )
}

export { ProfileIcon };