import classes from "./App.module.css";
import ButtonNeon from "./components/UI/Buttons/ButtonNeon";
import GalleryMain from "./views/GalleryMain";

function App() {
  return (
    <>
      <button>Boton 1</button>
      <button>Boton 2</button>
      <button>Boton 3</button>
      <GalleryMain />
        <ButtonNeon />
    </>
  );
}

export default App;
