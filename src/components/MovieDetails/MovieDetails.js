import classes from "./MovieDetails.module.css";
import MovieHeader from "./MovieHeader";
import MovieInfo from "./MovieInfo";
import MovieSelect from "./MovieSelect";
import DualRing from "../UI/DualRing";
import { useState, useEffect } from "react";

function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchMovieInfo = async (id = "-NK7V_eOwwQKLkIta4Is") => {
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
        //console.log(data);
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
    fetchMovieInfo();
  }, []);

  return (
    <div className={classes["movie-details-container"]}>
      <MovieSelect />
      {pending === true && <DualRing />}
      {!pending && movieInfo !== null &&(
        <>
          <MovieHeader />
          <MovieInfo info={movieInfo} />
        </>
      )}
    </div>
  );
}

export default MovieDetails;
