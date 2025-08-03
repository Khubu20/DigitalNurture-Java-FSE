import React from "react";
import FlightList from "./FlightList";

const Guest = () => {
  return (
    <div>
      <h2>Welcome Guest </h2>
      <p>Please log in to book flights.</p>
      <FlightList />
    </div>
  );
};

export default Guest;
