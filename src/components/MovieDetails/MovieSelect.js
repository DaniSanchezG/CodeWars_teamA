import classes from "./MovieSelect.module.css";

function MovieSelect() {
  return (
    <div>
      <div className={classes["title-container"]}>
        <h2>
          <span className={classes["mobile-text"]}>STREAM CODE WARS ON CODE+</span>
          <span className={classes["non-mobile-text"]}>ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODE+</span>
          </h2>
      </div>
      <div className={classes["select-container"]}>
        {/* <select>
          <option value="movie1">Movie1</option>
        </select> */}
      </div>
    </div>
  );
}

export default MovieSelect;
