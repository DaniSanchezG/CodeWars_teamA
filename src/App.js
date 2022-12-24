import classes from "./App.module.css";
import ButtonNeon from "./components/UI/Buttons/ButtonNeon";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Gallery>
        <ButtonNeon />
      </Gallery>
    </>
  );
}

export default App;
