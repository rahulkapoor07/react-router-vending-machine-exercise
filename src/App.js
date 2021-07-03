import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Burgers from "./Burgers";
import Tacos from "./Tacos";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <VendingMachine />
      
        <Route exact path="/soda">
          <Soda />
        </Route>

        <Route exact path="/chips">
          <Chips />
        </Route>

        <Route exact path="/burgers">
          <Burgers />
        </Route>

        <Route exact path="/tacos">
          <Tacos />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
