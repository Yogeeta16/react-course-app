import React, { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Common.css"; // Import common CSS file

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredCourses = Array.isArray(courses)
    ? courses.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="course-listing-container">
      <h2 className="heading">Course Listing</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-container">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <p className="course-name">{course.name}</p>
            <p className="instructor">Instructor: {course.instructor}</p>
            <Link className="view-details-link" to={`/courses/${course.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
