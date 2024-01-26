import React from "react";
import { connect } from "react-redux";
import { completeCourse } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "../styles/Common.css"; 

const MyStudy = ({ user, courses, completeCourse, completedCourses }) => {
  if (!user || !user.name) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="my-study-container">
      <h2 className="my-study-heading">My Study</h2>
      <p className="welcome-message">Welcome, {user.name}!</p>
      {courses.length === 0 ? (
        <p>No enrolled courses.</p>
      ) : (
        <ul className="card-container">
          {courses.map((course) => (
            <li className="course-card" key={course.id}>
              <p className="course-name">{course.name}</p>
              <p className="instructor">Instructor: {course.instructor}</p>
              <Link className="view-details-link" to={`/courses/${course.id}`}>
                View Details
              </Link>
              <p></p>
              {completedCourses.includes(course.id) ? (
                <p style={{ color: "green" }}>Completed</p>
              ) : (
                <button className="mark-completed-button" onClick={() => completeCourse(course.id)}>
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

const mapStateToProps = (state) => ({
  completedCourses: state.completedCourses,
});

export default connect(mapStateToProps, { completeCourse })(MyStudy);