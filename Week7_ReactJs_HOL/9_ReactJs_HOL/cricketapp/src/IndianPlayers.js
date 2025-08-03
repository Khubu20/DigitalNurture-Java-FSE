import React from 'react';

const IndianPlayers = () => {
  const players = ["Virat", "Rohit", "Shubman", "Rahul", "Hardik", "Jadeja", "Shami", "Bumrah", "Kuldeep", "Surya", "Dhoni"];

  // Separate odd and even players using destructuring
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  // Merge arrays using ES6 spread operator
  const T20players = ["Virat", "Rohit", "Surya"];
  const RanjiTrophyPlayers = ["Rahane", "Pujara"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
