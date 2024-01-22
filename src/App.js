// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";
import { fetchData } from "./services/api";

const App = () => {
  const [courses, setCourses] = useState([]);

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
      <Routes>
        <Route
          path="/courses/:courseId"
          element={<CourseDetails courses={courses} />}
        />
        <Route path="/courses" element={<CourseListing courses={courses} />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/" element={<p>Welcome to the Course App</p>} />
      </Routes>
    </Router>
  );
};

export default App;

// // src/App.js
// import React from "react";
// import CourseListing from "./components/CourseListing";

// const App = () => {
//   return (
//     <div>
//       <h1>React Course App</h1>
//       <CourseListing />
//     </div>
//   );
// };

// export default App;
