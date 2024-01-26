import React, { useState } from "react";
import { fetchStudentData } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";

const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const studentData = await fetchStudentData(
        "http://localhost:3031/students"
      );

      if (studentData && studentData.length > 0) {
        const user = studentData.find(
          (student) => student.email === email && student.password === password
        );

        if (user) {
          onLogin(user);
          navigate("/dashboard");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } else {
        alert("No student data available.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="login-signup-container">
      <h2 className="login-signup-heading">Login</h2>
      <div className="login-signup-form">
        <label className="login-signup-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-signup-input"
        />
      </div>
      <div className="login-signup-form">
        <label className="login-signup-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-signup-input"
        />
      </div>
      <button onClick={handleLogin} className="login-signup-button">
        Login
      </button>
    </div>
  );
};

export default LoginSignup;
