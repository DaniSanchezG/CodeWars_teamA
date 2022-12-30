import classes from "./MovieDetails.module.css";
import MovieHeader from "./MovieHeader";
import MovieInfo from "./MovieInfo";
import MovieSelect from "./MovieSelect";
import DualRing from "../../components/UI/Spinners/DualRing";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();

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

  useEffect(() => {
    fetchMovieInfo(params.filmId);
  }, [params.filmId]);

  return (
    <div className={classes["movie-details-container"]}>
      {pending && <DualRing />}

      {Object.keys(movieInfo).length > 0 && error === null && (
        <>
          <MovieSelect />
          <MovieHeader info={movieInfo} />
          <MovieInfo info={movieInfo} />
        </>
      )}
    </div>
  );
}

export default MovieDetails;
