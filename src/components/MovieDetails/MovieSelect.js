import classes from "./MovieSelect.module.css";

function MovieSelect() {
  return (
    <div>
      <div className={classes["title-container"]}>
        <h2>STREAM CODE WARS ON CODE+</h2>
      </div>
      <div className={classes["select-container"]}>
        <select>
          <option value="movie1">Movie1</option>
        </select>
      </div>
    </div>
  );
}

export default MovieSelect;
