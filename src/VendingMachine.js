import React from "react";
import {NavLink, Route} from "react-router-dom";

const VendingMachine = ()=>{
    return(
        <Route exact path="/">
        <div>
            <h1>Vending Machine</h1>
            <nav>
            <p><NavLink exact to="/soda">Soda</NavLink></p>
            <p><NavLink exact to="/chips">Chips</NavLink></p>
            <p><NavLink exact to="/burgers">Burgers</NavLink></p>
            <p><NavLink exact to="/tacos">Tacos</NavLink></p>
            </nav>

        </div>
        </Route>
    )
}

export  default VendingMachine;