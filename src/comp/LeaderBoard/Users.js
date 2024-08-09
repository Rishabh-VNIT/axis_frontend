import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import gold from "../../medals/g3-removebg-preview.png";
import silver from "../../medals/s1-removebg-preview.png";
import bronze from "../../medals/b2-removebg-preview.png";
import axis from "../../medals/axis.png";

const trophyIcons = {
  platinum: (
    <img src={axis} className="h-12 w-12" alt="Axis Medal" />
  ),
  gold: (
    <img src={gold} className="h-12 w-12" alt="Gold Medal" />
  ),
  silver: (
    <img src={silver} className="h-12 w-12" alt="Silver Medal" />
  ),
  bronze: (
    <img src={bronze} className="h-12 w-12" alt="Bronze Medal" />
  ),
};

const getMedal = (rank) => {
  if (rank === 1) return trophyIcons.platinum;
  if (rank === 2 || rank === 3) return trophyIcons.gold;
  if (rank >= 4 && rank <= 6) return trophyIcons.silver;
  if (rank >= 7 && rank <= 10) return trophyIcons.bronze;
  return null;
};

const getBackgroundColor = (rank) => {
  if (rank === 1) return 'bg-slate-200'; // Platinum
  if (rank === 2 || rank === 3) return 'bg-yellow-300'; // Gold
  if (rank >= 4 && rank <= 6) return 'bg-slate-100'; // Silver
  if (rank >= 7 && rank <= 10) return 'bg-yellow-600'; // Bronze
  return 'bg-white';
};

const Users = ({ leaderboardData }) => {
  if (!Array.isArray(leaderboardData)) {
    console.error("Expected 'leaderboardData' to be an array.");
    return null;
  }

  return (
    <div className="p-8 bg-transparent min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg text-white rounded-lg mb-6">
        <div className="hidden lg:grid grid-cols-5 gap-4 text-lg font-bold">
          <div className="flex items-center justify-center space-x-2">
            <span className="material-icons">star</span>
            <span>Rank</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="material-icons">star</span>
            <span>Medal</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="material-icons">person</span>
            <span>Name</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="material-icons">school</span>
            <span>College Name</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="material-icons">star</span>
            <span>Points</span>
          </div>
        </div>
        {/* Mobile Header */}
        <div className="lg:hidden grid grid-cols-3 text-lg font-bold mb-4">
          <div className="flex items-center justify-center">
            <span className="material-icons">star</span>
            <span>Rank</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons">person</span>
            <span>Name</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons">star</span>
            <span>Points</span>
          </div>
        </div>
      </div>

      {/* User Data */}
      {leaderboardData.length > 0 ? (
        leaderboardData.map((driver, index) => {
          const rank = index + 1;
          return (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300 ${getBackgroundColor(rank)}`}
            >
              <div className="lg:grid lg:grid-cols-5 lg:gap-4 text-lg font-medium text-gray-700">
                {/* Desktop View */}
                <div className="hidden lg:flex items-center justify-center p-2 rounded">
                  <span className="font-bold">{rank}</span>
                </div>
                <div className="hidden lg:flex items-center justify-center p-2 rounded">
                  {getMedal(rank)}
                </div>
                <div className="hidden lg:flex items-center justify-center p-2 rounded">
                  <span className="truncate">{driver.name}</span>
                </div>
                <div className="hidden lg:flex items-center justify-center p-2 rounded">
                  <span className="truncate">{driver.collegeName}</span>
                </div>
                <div className="hidden lg:flex items-center justify-center p-2 rounded">
                  <span>{driver.points}</span>
                  <span className="text-sm"> pts</span>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex flex-col">
                  <div className="flex items-center justify-around p-2">
                    <span className="font-bold">{rank}</span>
                    <span className="font-bold">{driver.name}</span>
                    <span className="font-bold">{driver.points} pts</span>
                  </div>
                  <div className="flex items-center justify-around p-2">
                    {getMedal(rank)}
                    <span className="text-sm text-gray-500">{driver.collegeName}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-gray-600">No data available</div>
      )}
    </div>
  );
}

export default Users;
