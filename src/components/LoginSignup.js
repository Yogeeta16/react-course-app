// src/components/LoginSignup.js
import React, { useState } from 'react';
import { fetchStudentData } from '../services/api';
import { useNavigate } from 'react-router-dom';

const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const studentData = await fetchStudentData('http://localhost:3031/students'); 

      if (studentData && studentData.length > 0) {
        const user = studentData.find(
          (student) => student.email === email && student.password === password
        );

        if (user) {
          onLogin(user);
          navigate('/dashboard');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        alert('No student data available.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
      <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginSignup;
