// src/components/StudentDashboard.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markCourseAsCompleted } from "../redux/actions/studentActions";

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);
  const dispatch = useDispatch();

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Enrolled Courses</h3>
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              <p>Course Name: {course.name}</p>
              <p>Instructor: {course.instructor}</p>
              {/* Add other course details like thumbnail, due date, progress bar */}
              <button onClick={() => handleMarkAsCompleted(course.id)}>
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
