import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './l.css';
import Users from '../../comp/LeaderBoard/Users';
import config from "../../config";
const BASE_URL = config.BASE_URL;

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/api/leaderboard`);
        console.log(response.data);
        setLeaderboardData(response.data.leaderboard);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchData();

    // Cleanup function to avoid any issues with unmounted components
    return () => {
      // If you need to cancel any ongoing requests, you can do so here.
      // For example, you can use axios cancel token.
    };
  }, []);

  const colorsArray = [
    '#E5E4E2', // 1st place - Platinum
    '#FFD700', // 2nd place - Gold
    '#FFD700', // 3rd place - Gold
    '#C0C0C0', // 4th place - Silver
    '#C0C0C0', // 5th place - Silver
    '#C0C0C0', // 6th place - Silver
    '#CD7F32', // 7th place - Bronze
    '#CD7F32', // 8th place - Bronze
    '#CD7F32', // 9th place - Bronze
    '#CD7F32', // 10th place - Bronze
  ];

  // The remaining colors can follow your original array if needed


  return (
    <>
      <div>
        {/* <h1>Hi I am stish</h1> */}
        {/* <TopBar /> */}
        {/* <SingleUserCard rank={"1"} college={"VNIT"} name={"Satish"} points={100} ></SingleUserCard> */}
        {/* <Users users={[
  { rank: 1, name: "Name 1", college: "College 1", points: 100 },
  { rank: 2, name: "Name 2", college: "College 2", points: 200 }
]} /> */}
        <Users leaderboardData={leaderboardData} />

        {/* Other components and content */}
      </div>
    </>
  )

  return (
    <div className="ld-container">
      <br />
      <h1 className="heading-leaderboard font-bold">LeaderBoard</h1>
      <br />

      <div className="container mx-auto rounded-md text-center">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>CA</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((driver, index) => (
              <React.Fragment key={index}>
                <tr key={index} className="driver bg-gray-800 text-white rounded-lg my-2 shadow-md">
                  <td className="position p-4 text-center font-semibold">{index + 1}</td>
                  <td className="driver p-4" style={{ borderLeft: `4px solid ${colorsArray[index]}`, color: '#fff' }}>
                    <span dangerouslySetInnerHTML={{
                      __html: `${driver.name.split(' ').map((part, i) => i > 0 ?
                        `<strong style="color: #ffffff">${part}</strong>` :
                        `<span style="color: #ffffff">${part}</span>`).join(' ')} 
        <span class="block text-gray-400">${driver.collegeName}</span>`
                    }}
                    />
                  </td>
                  <td className="gap p-4 text-right font-semibold"><span>+{driver.points}</span></td>
                </tr>
                <tr style={{ height: '10px' }}></tr>

              </React.Fragment>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Leaderboard;
