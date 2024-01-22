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
   
      <div>
        <button
          onClick={toggleSyllabus}
          style={{ cursor: "pointer" }}
          aria-expanded={isSyllabusExpanded}
        >
          Syllabus {isSyllabusExpanded ? "(Collapse)" : "(Expand)"}
        </button>
      
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
