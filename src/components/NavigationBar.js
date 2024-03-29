// src/components/NavigationBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = ({ loggedInUser, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();

    navigate("/login");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/courses">Course List</Link>
        </li>
        {loggedInUser ? (
          <>
            <li>
              <Link to="/mystudy">My Study</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
