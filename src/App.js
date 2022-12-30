/*import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import HourGlass from "./components/UI/Spinners/HourGlass";
const TasksManager = lazy(() => import("./views/TasksManager"));
const About = lazy(() => import("./views/About"));
const LoginPage = lazy(() => import("./views/Login/LoginPage"))
// import TasksManager from "./views/TasksManager";
// import About from "./views/About";
// import LoginPage from "./views/Login/LoginPage";*/
import Mobile from "./components/Mobile";
import SlideShow from "./components/SlideShow";
import { ProgressBar } from "./components/ProgressBar";


function App() {
  return (
    <>
    <SlideShow/>
    </>
  );
}

export default App;
