import { useState } from "react";

const useFetchMovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [movies, setMovies] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchMovieInfo = async (id) => {
    try {
      setPending(true);
      setError(null);

      const response = await fetch(
        "https://star-wars-movies-ad4e6-default-rtdb.europe-west1.firebasedatabase.app/films/" +
          id +
          ".json"
      );

      if (response.ok) {
        const data = await response.json();
        setMovieInfo(data);
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong.",
      });
    }
    setPending(false);
  };

  const fetchFilms = async () => {
    try {
      setPending(true);
      setError(null);

      const response = await fetch(
        "https://star-wars-movie-ii-default-rtdb.europe-west1.firebasedatabase.app/movies/-NKYiceKRjq8Mn96VDwe.json"
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data);
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong.",
      });
    }
    setPending(false);
  };

  return { pending, error, movieInfo, movies, fetchFilms, fetchMovieInfo };
};

export default useFetchMovieInfo;
