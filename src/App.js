import MovieDetails from "./views/MovieDetails";
import classes from "./App.module.css";

function App() {
  const movieId = "-NKHb9fYfE82rwSCdHPU";
  return (
    <div className={classes.container}>
      <MovieDetails id={movieId} />
    </div>
  );
}

export default App;
