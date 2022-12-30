import MovieDetails from "./views/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  //const movieId = "-NKHb9fYfE82rwSCdHPU";

  return (
    <div>
      <Routes>
        <Route path="/films/:filmId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
