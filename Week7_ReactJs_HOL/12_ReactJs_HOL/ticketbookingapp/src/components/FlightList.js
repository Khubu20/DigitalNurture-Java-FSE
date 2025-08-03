import React from "react";

const flights = [
  { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM", price: "₹4500" },
  { id: 2, from: "Bangalore", to: "Chennai", time: "2:30 PM", price: "₹3200" },
  { id: 3, from: "Pune", to: "Kolkata", time: "6:00 PM", price: "₹5600" }
];

const FlightList = ({ showBookButton = false }) => {
  return (
    <div>
      <h2>Available Flights</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>From</th><th>To</th><th>Time</th><th>Price</th>{showBookButton && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>{flight.price}</td>
              {showBookButton && <td><button onClick={() => alert("Ticket Booked!")}>Book</button></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
