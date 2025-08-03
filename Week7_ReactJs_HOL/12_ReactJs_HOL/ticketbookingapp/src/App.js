import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Guest from "./components/Guest";
import User from "./components/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div>
        <header>
          <h1>✈️ Ticket Booking App</h1>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </header>

        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/user" /> : <Guest />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
