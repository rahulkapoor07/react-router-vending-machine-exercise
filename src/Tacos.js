import React from "react";
import {NavLink} from "react-router-dom";

const Tacos = ()=>{
    return (
        <>
        <h1>Tacos are fast food!</h1>
        <img src="https://media4.giphy.com/media/b5WqMx1eiFv6U/giphy.gif"/>
        <NavLink exact to="/">Go back!</NavLink>
        </>
    )
}

export default Tacos;