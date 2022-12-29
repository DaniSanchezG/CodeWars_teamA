import Films from "./views/films/Films";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import { Route, Routes, Outlet } from "react-router-dom";


function App() {
  const movieId = "-NKHb9fYfE82rwSCdHPU";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmId" element={<MovieDetails  />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1>HEADER</h1>
      <Outlet />
      <h1>FOOTER</h1>
    </div>
  );
}

export default App;

