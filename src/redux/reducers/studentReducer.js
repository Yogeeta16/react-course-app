// src/redux/reducers/studentReducer.js
const initialState = {
    enrolledCourses: [], // Initially an empty array
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENROLL_IN_COURSE":
        // Implement logic to enroll in a course
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
  
      case "MARK_COURSE_COMPLETED":
        // Implement logic to mark a course as completed
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map((course) =>
            course.id === action.payload
              ? { ...course, completed: true }
              : course
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default studentReducer;
  