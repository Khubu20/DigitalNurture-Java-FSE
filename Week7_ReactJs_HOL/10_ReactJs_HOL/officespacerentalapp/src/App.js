import React from "react";
import "./App.css";

function App() {
  const officeSpaces = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "/dbs.avif",
    }
    
  ];

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      {officeSpaces.map((office, index) => (
        <div key={index} className="office-card">
          {/* ✅ Image */}
          <img
            src={office.image}
            alt={office.name}
            className="office-image"
          />

          {/* ✅ Image Link below */}
          

          {/* ✅ Name */}
          <h2>Name: {office.name}</h2>

          {/* ✅ Rent */}
          <h3 style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: Rs. {office.rent}
          </h3>

          {/* ✅ Address */}
          <p>
            <strong>Address:</strong> {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

