import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../../config";
import Medals from '../Medals/medals';

const BASE_URL = config.BASE_URL;

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);
    const [newPoints, setNewPoints] = useState('');
    const [coinsChanger, setCoinsChanger] = useState(true);

    // Fetch users from the API
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            axios.get(`${BASE_URL}/admin/api/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    setUsers(response.data.users);
                    setFilteredUsers(response.data.users);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        }
    }, [coinsChanger]);

    // Filter users based on the search term
    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        setFilteredUsers(users.filter(user => 
            user.name.toLowerCase().includes(lowercasedTerm) ||
            user.email.toLowerCase().includes(lowercasedTerm) ||
            user.collegeName.toLowerCase().includes(lowercasedTerm)
        ));
    }, [searchTerm, users]);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle edit points button click
    const handleChangePointsClick = (userId) => {
        setEditingUserId(userId);
    };

    // Handle points change
    const handlePointsChange = (change) => {
        const token = localStorage.getItem("auth-token");
        if (editingUserId !== null && token) {
            axios.post(`${BASE_URL}/admin/change-points`, {
                userId: editingUserId,
                points: change,
                token: token
            })
                .then(response => {
                    if (response.status === 200) {
                        setUsers(prevUsers =>
                            prevUsers.map(user =>
                                user._id === editingUserId ? { ...user, points: user.points + change } : user
                            )
                        );
                        setFilteredUsers(prevUsers =>
                            prevUsers.map(user =>
                                user._id === editingUserId ? { ...user, points: user.points + change } : user
                            )
                        );
                        setNewPoints('');
                    }
                })
                .catch(error => {
                    console.error('Error changing points:', error.response?.data?.message || error.message);
                });
        }
    };

    // Handle save points button click
    const handleSavePoints = (change) => {
        const token = localStorage.getItem("auth-token");
        if (editingUserId !== null && token) {
            axios.post(`${BASE_URL}/admin/save-points`, {
                userId: editingUserId,
                points: change,
                token: token
            })
                .then(response => {
                    if (response.status === 200) {
                        setUsers(prevUsers =>
                            prevUsers.map(user =>
                                user._id === editingUserId ? { ...user, points: user.points + change } : user
                            )
                        );
                        setFilteredUsers(prevUsers =>
                            prevUsers.map(user =>
                                user._id === editingUserId ? { ...user, points: user.points + change } : user
                            )
                        );
                        setNewPoints('');
                    }
                })
                .catch(error => {
                    console.error('Error saving points:', error.response?.data?.message || error.message);
                });
        }
    };

    // Handle cancel edit button click
    const handleCancelEdit = () => {
        setNewPoints('');
        setEditingUserId(null);
    };

    // Handle reset all points button click
    const handleResetAll = () => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            axios.post(`${BASE_URL}/admin/reset-all-points`, { token: token })
                .then(response => {
                    if (response.status === 200) {
                        setCoinsChanger(value => !value);
                        setUsers(prevUsers =>
                            prevUsers.map(user => ({ ...user, points: 0, coins: user.coins }))
                        );
                        setFilteredUsers(prevUsers =>
                            prevUsers.map(user => ({ ...user, points: 0, coins: user.coins }))
                        );
                    }
                })
                .catch(error => {
                    console.error('Error resetting all points:', error.response?.data?.message || error.message);
                });
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Admin Panel</h2>
                <input
                    type="text"
                    placeholder="Search by name, email, or college name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
                />
                <div className='flex items-center justify-center'>
                    <button
                        onClick={handleResetAll}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300 ease-in-out mb-4"
                    >
                        Reset All Points
                    </button>
                </div>
                {filteredUsers.length > 0 ? (
                    <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 border-b border-gray-300">
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">College Name</th>
                                <th className="p-4 text-left">Points</th>
                                <th className="p-4 text-left">Coins</th>
                                <th className="p-4 text-left">Actions</th>
                                <th className="p-4 text-left">Medals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <React.Fragment key={user._id}>
                                    <tr className="border-b border-gray-300">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                        <td className="p-4">{user.collegeName}</td>
                                        <td className="p-4">{user.points}</td>
                                        <td className="p-4">{user.coins}</td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => handleChangePointsClick(user._id)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
                                            >
                                                Change Points
                                            </button>
                                        </td>
                                        <td className="p-4">
                                            <Medals user={user}></Medals>
                                        </td>
                                    </tr>
                                    {editingUserId === user._id && (
                                        <tr>
                                            <td colSpan="7" className="p-4">
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        value={newPoints}
                                                        onChange={(e) => setNewPoints(e.target.value)}
                                                        className="p-2 border border-gray-300 rounded-lg mr-4 text-black"
                                                    />
                                                    <button
                                                        onClick={() => handlePointsChange(Number(newPoints))}
                                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300 ease-in-out mr-2"
                                                    >
                                                        Increase
                                                    </button>
                                                    <button
                                                        onClick={() => handlePointsChange(-Number(newPoints))}
                                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300 ease-in-out mr-2"
                                                    >
                                                        Decrease
                                                    </button>
                                                    <button
                                                        onClick={() => handleSavePoints(Number(newPoints))}
                                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300 transition duration-300 ease-in-out mr-2"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={handleCancelEdit}
                                                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 transition duration-300 ease-in-out"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">No users found</p>
                )}
            </div>
        </div>
    );
};

export default Admin;
