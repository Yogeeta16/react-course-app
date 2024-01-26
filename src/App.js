// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginSignup from "./components/LoginSignup";
import StudentDashboard from "./components/StudentDashboard";
import CourseListing from "./components/CourseListing";
import MyStudy from "./components/MyStudy";
import { fetchData } from "./services/api";
import CourseDetails from "./components/CourseDetails";
import "./App.css";
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [courses, setCourses] = useState([]);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  useEffect(() => {
    fetchData("http://localhost:3030/posts")
      .then((result) => {
        console.log("Fetched courses:", result);
        setCourses(result);
      })
      .catch((error) =>
        console.error("Error fetching courses:", error.message)
      );
  }, []);

  return (
    <Router>
      <NavigationBar loggedInUser={loggedInUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            loggedInUser ? (
              <StudentDashboard user={loggedInUser} />
            ) : (
              <LoginSignup onLogin={handleLogin} />
            )
          }
        />
        <Route path="/courses" element={<CourseListing />} />
        <Route
          path="/mystudy"
          element={<MyStudy user={loggedInUser} courses={courses} />}
        />
        <Route
          path="/courses/:courseId"
          element={<CourseDetails courses={courses} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
