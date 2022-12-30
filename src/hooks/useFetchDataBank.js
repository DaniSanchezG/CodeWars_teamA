// import { useState, useEffect } from "react";

// const useFetchDataBank = () => {
//   const [gallery, setGallery] = useState({});
//   const [pending, setPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const response = await fetch(
//           "https://characters-206d3-default-rtdb.europe-west1.firebasedatabase.app/characters.json"
//         );
//         if (!response.ok) {
//           throw new Error("Did not receive expected data");
//           const galleryList = await response.json();
//         }
//         setGallery(galleryList);
//         setError(null);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setPending(false);
//       }
//     };
//     (async () => fetchGallery())();
//   }, []);
// };

// export default useFetchDataBank;
