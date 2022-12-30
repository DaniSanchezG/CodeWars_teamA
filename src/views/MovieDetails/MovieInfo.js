import classes from "./MovieInfo.module.css";

function MovieInfo(props) {
  return (
    <div className={classes["movie-info-container"]}>
      <div className={classes["poster-container"]}>
        <img src={props.info.images.posterImg} alt="movie-poster" />
      </div>
      <div className={classes["main-info-container"]}>
        <h1>{props.info.movieTitle}</h1>
        <p>
          <strong>Rating:</strong> {props.info.rating}
        </p>
        <p>
          <strong>Genre:</strong> {props.info.genre}
        </p>
      </div>
      <div className={classes["description-container"]}>
        <p className={classes["text-container"]}>{props.info.description}</p>
      </div>
      <div className={classes["line-container"]}>
          <div className={classes.line}> </div>
        </div>
      <div className={classes["rating-container"]}>
        <div>
          <img
            src={props.info.images.ratingImg}
            alt="rating"
            className={classes["rating-img"]}
          />
        </div>
        <div className={classes["link-container"]}>
          <a
            href="https://www.motionpictures.org/"
            className={classes["rating-link"]}
          >
            MOTIONPICTURES.ORG
          </a>
          <a
            href="https://www.filmratings.com/"
            className={classes["rating-link"]}
          >
            FILMRATINGS.COM
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
