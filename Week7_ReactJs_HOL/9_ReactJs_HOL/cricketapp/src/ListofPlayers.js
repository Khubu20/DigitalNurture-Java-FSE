import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 45 },
    { name: "KL Rahul", score: 75 },
    { name: "Hardik Pandya", score: 60 },
    { name: "Jadeja", score: 95 },
    { name: "Shami", score: 65 },
    { name: "Bumrah", score: 80 },
    { name: "Kuldeep", score: 50 },
    { name: "Surya Kumar", score: 70 },
    { name: "Dhoni", score: 100 }
  ];

  // Filter players with score < 70
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70:</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
