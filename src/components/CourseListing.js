// src/components/CourseListing.js
import React, { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Course Listing</h2>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <p>{course.name}</p>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/courses/${course.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;

// // src/components/CourseListing.js
// import React, { useState, useEffect } from "react";
// import { fetchData } from "../services/api";

// const CourseListing = () => {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedCourseId, setExpandedCourseId] = useState(null);

//   useEffect(() => {
//     fetchData("http://localhost:3030/posts")
//       .then((result) => {
//         console.log("Fetched courses:", result);
//         setCourses(result);
//       })
//       .catch((error) => console.error("Error fetching courses:", error.message));
//   }, []);

//   const handleExpand = (courseId) => {
//     setExpandedCourseId(courseId === expandedCourseId ? null : courseId);
//   };

//   const handleCompress = () => {
//     setExpandedCourseId(null);
//   };

//   const filteredCourses = Array.isArray(courses)
//     ? courses.filter(
//         (course) =>
//           course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       <h2>Course Listing</h2>
//       <input
//         type="text"
//         placeholder="Search by course name or instructor"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredCourses.map((course) => (
//           <li key={course.id}>
//             <p>{course.name}</p>
//             <p>Instructor: {course.instructor}</p>
//             {expandedCourseId === course.id ? (
//               <div>
//                 {/* Expanded details */}
//                 <p>Description: {course.description}</p>
//                 {/* Add more details as needed */}
//                 <button onClick={handleCompress}>Compress</button>
//               </div>
//             ) : (
//               <button onClick={() => handleExpand(course.id)}>View Details</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseListing;
