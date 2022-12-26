import classes from "./App.module.css";
import ButtonNeon from "./components/UI/Buttons/ButtonNeon";
import GalleryMain from "./views/GalleryMain";
import { useState } from "react";

function App() {
  const [idFilter, setIdFilter] = useState("1");

  return (
    <>
      <button onClick={() => setIdFilter("1")}>Boton 1</button>
      <button onClick={() => setIdFilter("2")}>Boton 2</button>
      <button onClick={() => setIdFilter("3")}>Boton 3</button>
      <GalleryMain idFilter={idFilter} />
    </>
  );
}

export default App;