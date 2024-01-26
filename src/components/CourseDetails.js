// CourseDetails.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CourseDetails.css";

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);

  const toggleSyllabus = () => {
    setSyllabusExpanded(!isSyllabusExpanded);
  };

  if (!course) {
    return <p className="course-details-section">Course not found.</p>;
  }

  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = course;

  return (
    <div className="course-details-container">
      <h2 className="course-details-heading">Course Details</h2>
      <p className="course-details-section">
        {" "}
        <span>Course Name:</span> {name}
      </p>
      <p className="course-details-section">
        <span>Instructor: </span>
        {instructor}
      </p>
      <p className="course-details-section">
        <span>Description: </span>
        {description}
      </p>
      <p className="course-details-section">
        <span>Enrollment Status:</span> {enrollmentStatus}
      </p>
      <p className="course-details-section">
        <span>Duration:</span> {duration}
      </p>
      <p className="course-details-section">
        <span>Schedule:</span> {schedule}
      </p>
      <p className="course-details-section">
        <span>Location:</span> {location}
      </p>

      <div className="course-details-section">
        <button
          onClick={toggleSyllabus}
          className="syllabus-button"
          aria-expanded={isSyllabusExpanded}
        >
          Syllabus {isSyllabusExpanded ? "(Collapse)" : "(Expand)"}
        </button>

        {isSyllabusExpanded && (
          <ul className="syllabus-list">
            {syllabus.map((item) => (
              <li key={item.week} className="syllabus-item">
                <p className="syllabus-item-week">
                  Week {item.week}: {item.topic}
                </p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
