import classes from "./MovieDetails.module.css";
import MovieHeader from "../components/MovieDetails/MovieHeader";
import MovieInfo from "../components/MovieDetails/MovieInfo";
import MovieSelect from "../components/MovieDetails/MovieSelect";
import DualRing from "../components/UI/Spinners/DualRing";
import GalleryMain from "./GalleryMain";
import { useState, useEffect } from "react";

function MovieDetails(props) {
  const [movieInfo, setMovieInfo] = useState({});
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

  useEffect(() => {
    fetchMovieInfo(props.id);
  }, []);

  return (
    <div className={classes["movie-details-container"]}>
      {pending && <DualRing />}

      {Object.keys(movieInfo).length > 0 && error === null && (
        <>
          <MovieSelect />
          <MovieHeader info={movieInfo} />
          <MovieInfo info={movieInfo} />
          <GalleryMain id={props.id} />
        </>
      )}
    </div>
  );
}

export default MovieDetails;
