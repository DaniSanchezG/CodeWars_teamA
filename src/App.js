import Films from "./views/films/Films";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Error404 from "./views/Errors/Error404";
import { Route, Routes, Outlet } from "react-router-dom";


function App() {
  const movieId = "-NKHb9fYfE82rwSCdHPU";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmId" element={<MovieDetails  />} />
          <Route path="*" element={<Error404  />} />
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

