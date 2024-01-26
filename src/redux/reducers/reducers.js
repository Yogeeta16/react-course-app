// src/reducers/reducers.js
const initialState = {
    completedCourses: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'COMPLETE_COURSE':
        return {
          ...state,
          completedCourses: [...state.completedCourses, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  