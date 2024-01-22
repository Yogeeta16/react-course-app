// export const fetchData = (url, options) => {
//     return fetch(url, options)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error.message);
//         throw error;
//       });
//   };
//
//
export const fetchData = (url, options = {}) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
};
