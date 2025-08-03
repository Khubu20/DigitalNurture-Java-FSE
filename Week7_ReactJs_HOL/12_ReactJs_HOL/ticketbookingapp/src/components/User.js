import React from "react";
import FlightList from "./FlightList";

const User = () => {
  return (
    <div>
      <h2>Welcome Back, User </h2>
      <FlightList showBookButton={true} />
    </div>
  );
};

export default User;
