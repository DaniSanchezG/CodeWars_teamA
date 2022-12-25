import classes from "./MovieHeader.module.css";

function MovieHeader() {
  return (
    <div className={classes["movie-banner-container"]}>
      <div>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/image_27a7e668.jpeg?region=0,0,640,480&width=480"
          alt="movie-image"
        />
        <span className={classes["gradient-background"]}></span>
        <span className={classes["banner-title"]}>
          <h2>The landmark Skywalker saga comes to a conclusion.</h2>
        </span>
      </div>
      <button className={classes["stream-button"]}>STREAM ON CODE+</button>
    </div>
  );
}

export default MovieHeader;
