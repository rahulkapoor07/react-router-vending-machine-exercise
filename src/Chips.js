import React from "react";
import {NavLink} from "react-router-dom";

const Chips = ()=>{
    return (
        <>
        <h1>Chips hunger</h1>
        <img src="https://media1.tenor.com/images/e3687e229d988a6e0d6ac82e57cfa588/tenor.gif?itemid=14083029"/>
        <NavLink exact to="/">Go back!</NavLink>
        </>
    )
}

export default Chips;