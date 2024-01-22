// src/redux/actions/studentActions.js
export const markCourseAsCompleted = (courseId) => ({
    type: "MARK_COURSE_COMPLETED",
    payload: courseId,
  });
  