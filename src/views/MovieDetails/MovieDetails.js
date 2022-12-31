import classes from "./MovieDetails.module.css";
import MovieHeader from "./MovieHeader";
import MovieInfo from "./MovieInfo";
import MovieSelect from "./MovieSelect";
import DualRing from "../../components/UI/Spinners/DualRing";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMovieInfo from "../../hooks/useFetchMovieInfo";

function MovieDetails() {
  const params = useParams();

  const { pending, error, movieInfo, fetchMovieInfo, movies, fetchFilms } = useFetchMovieInfo();

  useEffect(() => {
    fetchMovieInfo(params.filmId);
  }, [params.filmId]);

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className={classes["movie-details-container"]}>
      {pending && <DualRing />}

      {Object.keys(movieInfo).length > 0 && movies.length > 0 && error === null && (
        <>
          <MovieSelect movies={movies} />
          <MovieHeader info={movieInfo} />
          <MovieInfo info={movieInfo} />
        </>
      )}
    </div>
  );
}

export default MovieDetails;
