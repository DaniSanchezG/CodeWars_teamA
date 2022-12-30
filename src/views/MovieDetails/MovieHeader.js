import classes from "./MovieHeader.module.css";

function MovieHeader(props) {
  return (
    <div className={classes["movie-banner-container"]}>
      <div>
        <picture>
          <source
            media="(min-width:650px)"
            srcSet={props.info.images.bannerImgDesktop}
          />
          <img
            src={props.info.images.bannerImgMobile}
            alt="movie-banner"
          />
        </picture>
        <span className={classes["gradient-background"]}></span>
        <span className={classes["banner-title"]}>
          <h2>{props.info.bannerTitle}</h2>
        </span>
        <div className={classes["button-container"]}>
          <button className={classes["stream-button"]}>STREAM ON CODE+</button>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
