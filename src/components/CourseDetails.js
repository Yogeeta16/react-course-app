// src/components/CourseDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <p>Course not found.</p>;
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

  // Initialize state unconditionally
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);

  const toggleSyllabus = () => {
    setSyllabusExpanded(!isSyllabusExpanded);
  };

  return (
    <div>
      <h2>Course Details</h2>
      <p>Course Name: {name}</p>
      <p>Instructor: {instructor}</p>
      <p>Description: {description}</p>
      <p>Enrollment Status: {enrollmentStatus}</p>
      <p>Duration: {duration}</p>
      <p>Schedule: {schedule}</p>
      <p>Location: {location}</p>
      <p>Pre-requisites: {prerequisites.join(", ")}</p>

      {/* Expandable Syllabus */}
      <div>
        <button
          onClick={toggleSyllabus}
          style={{ cursor: "pointer" }}
          aria-expanded={isSyllabusExpanded}
        >
          Syllabus {isSyllabusExpanded ? "(Collapse)" : "(Expand)"}
        </button>
        {/* <h4 onClick={toggleSyllabus} style={{ cursor: "pointer" }}>
          Syllabus {isSyllabusExpanded ? "(Collapse)" : "(Expand)"}
        </h4> */}
        {isSyllabusExpanded && (
          <ul>
            {syllabus.map((item) => (
              <li key={item.week}>
                <p>
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
