// import "./App.css";

//Componentes
import Related from "./components/Related/Related";
import Cards from "./components/Related/Cards";

//Datas
import { datas } from "./db/datas";



function App() {
  return (
    <div>
      <Related />
      <Cards datas={datas}></Cards>
    </div>
  );
}

export default App;
