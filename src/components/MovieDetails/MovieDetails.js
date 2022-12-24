import classes from "./MovieDetails.module.css";
import movieBanner from "../../assets/movie_image.jpeg";
import moviePoster from "../../assets/movie_poster.webp";
import rating from "../../assets/rating.webp";

function MovieDetails() {
  return (
    <div className={classes["movie-details-container"]}>
      <div className={classes["title-container"]}>
        <h2>STREAM CODE WARS ON CODE+</h2>
      </div>
      <div className={classes["select-container"]}>
      <select> 
        <option value="movie1">Movie1</option>
      </select>
      </div>
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

      <div className={classes["movie-info-container-desktop"]}>
        <div className={classes["movie-info-container"]}>
          <div className={classes["poster-container"]}>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg"
              alt="movie-poster"
            />
          </div>
          <div className={classes["main-info-container-desktop"]}></div>
          <div className={classes["main-info-container"]}>
            <h1>Star Wars: The Rise of Skywalker (Episode IX)</h1>
            <p>
              <strong>Rating:</strong> PG-13
            </p>
            <p>
              <strong>Genre:</strong> Action, Adventure, Science Fiction
            </p>
          </div>
        </div>
        <p className={classes["text-container"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit
          velit, porttitor a erat ut, feugiat feugiat odio. Nulla tempus ac ex
          id tincidunt. Curabitur lobortis hendrerit volutpat. Donec commodo at
          tortor eget placerat. Aliquam orci nisl, commodo at sem non, tristique
          finibus ante. Sed condimentum libero vitae mi consectetur.
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
  );
}

export default MovieDetails;
