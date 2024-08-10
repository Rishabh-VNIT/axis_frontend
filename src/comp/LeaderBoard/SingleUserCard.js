import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const SingleUserCard = ({ rank, college, name, points }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 space-y-2 text-white">
      <div className="text-lg font-bold">{rank}</div>
      <div className="text-md font-semibold">{name}</div>
      <div className="text-sm">{college}</div>
      <div className="text-md font-bold">{points} pts</div>
    </div>
  );
}

export default SingleUserCard;
