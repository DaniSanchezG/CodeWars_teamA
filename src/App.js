import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const movieId = "-NKHb9fYfE82rwSCdHPU";
  return (
    <div>
      <MovieDetails id={movieId} />
    </div>
  );
}

export default App;

