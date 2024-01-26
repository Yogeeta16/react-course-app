import React, { useState } from 'react';

const MyStudy = ({ user, courses }) => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCompleteCourse = (courseId) => {
    if (!completedCourses.includes(courseId)) {
      setCompletedCourses([...completedCourses, courseId]);
    }
  };

  // Function to check if a course is completed
  const isCourseCompleted = (courseId) => {
    return completedCourses.includes(courseId);
  };

  return (
    <div>
      <h2>My Study</h2>
      <p>Welcome, {user.name}!</p>
      {courses.length === 0 ? (
        <p>No enrolled courses.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <p>{course.name}</p>
              <p>Instructor: {course.instructor}</p>
              {/* Conditional rendering based on completion status */}
              {isCourseCompleted(course.id) ? (
                <p style={{ color: 'green' }}>Completed</p>
              ) : (
                <button onClick={() => handleCompleteCourse(course.id)}>
                  Mark as Completed
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyStudy;
