// src/components/MyStudy.js
import React, { useEffect, useState } from "react";

const MyStudy = ({ user, courses }) => {
  console.log("Received user:", user);
  console.log("Received courses:", courses);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    if (user && courses) {

      const userId = parseInt(user.id, 10);

      const userEnrolledCourses = courses.filter((course) =>
        course.students.some((student) => student.id === userId)
      );
      setEnrolledCourses(userEnrolledCourses);
    }
  }, [user, courses]);

  return (
    <div>
      <h2>My Study</h2>
      {enrolledCourses.length === 0 ? (
        <p>No enrolled courses.</p>
      ) : (
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              <p>{course.name}</p>
              <p>Instructor: {course.instructor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyStudy;
