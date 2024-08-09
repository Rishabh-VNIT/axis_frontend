import React from 'react';
import gold from "../../medals/g3-removebg-preview.png";
import silver from "../../medals/s1-removebg-preview.png";
import bronze from "../../medals/b2-removebg-preview.png";
import axis from "../../medals/axis.png";

const trophyIcons = {
    platinum: (
        <img src={axis} className="w-12 h-12" alt="Axis Medal" />
    ),
    gold: (
        <img src={gold} className="w-12 h-12" alt="Gold Medal" />
    ),
    silver: (
        <img src={silver} className="w-12 h-12" alt="Silver Medal" />
    ),
    bronze: (
        <img src={bronze} className="w-12 h-12" alt="Bronze Medal" />
    ),
};

function Medals({ user }) {
    return (
        <div className="flex items-center space-x-2">
            {user.medals.platinum > 0 && (
                <div className="flex items-center">
                    {trophyIcons['platinum']}
                    <span className="ml-1 text-xl">{" x " + user.medals.platinum + " "}</span>
                </div>
            )}
            {user.medals.gold > 0 && (
                <div className="flex items-center">
                    {trophyIcons['gold']}
                    <span className="ml-1 text-xl">{" x " + user.medals.gold + " "}</span>
                </div>
            )}
            {user.medals.silver > 0 && (
                <div className="flex items-center">
                    {trophyIcons['silver']}
                    <span className="ml-1 text-xl">{" x " + user.medals.silver + " "}</span>
                </div>
            )}
            {user.medals.bronze > 0 && (
                <div className="flex items-center">
                    {trophyIcons['bronze']}
                    <span className="ml-1 text-xl">{" x " + user.medals.bronze + " "}</span>
                </div>
            )}
        </div>
    );
}

export default Medals;
