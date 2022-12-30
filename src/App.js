import Films from "./views/films/Films";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Error404 from "./views/Errors/Error404";
import { Route, Routes, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
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
      <Footer />
    </div>
  );
}

export default App;

