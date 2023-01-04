import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Films from "./views/films/Films";
import Footer from "./components/Footer/Footer";
import Error404 from "./views/Errors/Error404";
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Databank from "./components/databank/DataBank";
import RelatedWrapper from "./components/Related/RelatedWrapper";
import Interactive from "./components/Interactive/Interactive";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";
// import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Slider />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmId" element={<MovieDetails  />} />
          <Route path="/databank" element={<Databank  />} />
          <Route path="/databank/related" element={<RelatedWrapper  />} />
          <Route path="*" element={<Error404  />} />
          <Route path="/interactive" element={<Interactive  />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* <h1 style={{color: "white"}}>HEADER</h1> */}
      <Nav /> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;


