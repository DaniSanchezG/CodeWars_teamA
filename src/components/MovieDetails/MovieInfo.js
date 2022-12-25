import classes from "./MovieInfo.module.css";

function MovieInfo(props) {
  //console.log(props.info[0].movieTitle);
  return (
    <div>
      <div className={classes["movie-info-container"]}>
        <div className={classes["poster-container"]}>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg"
            alt="movie-poster"
          />
        </div>
        <div className={classes["main-info-container"]}>
          {/* <h1>{props.info[0].movieTitle}</h1> */}
          <p>
            <strong>Rating:</strong> PG-13
          </p>
          <p>
            <strong>Genre:</strong> Action, Adventure, Science Fiction
          </p>
          <div className={classes["description-container"]}>
            <p className={classes["text-container"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              velit velit, porttitor a erat ut, feugiat feugiat odio. Nulla
              tempus ac ex id tincidunt. Curabitur lobortis hendrerit volutpat.
              Donec commodo at tortor eget placerat. Aliquam orci nisl, commodo
              at sem non, tristique finibus ante. Sed condimentum libero vitae
              mi consectetur.
            </p>
            <div>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/rating_pg13_d776f3ac.png?region=0%2C0%2C104%2C44"
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
      </div>
    </div>
  );
}

export default MovieInfo;
