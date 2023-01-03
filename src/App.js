import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">

      <Header />

        <Router>

          <Nav />

        </Router>

    </div>
  );
}

export default App;
