import React from "react";
import {NavLink} from "react-router-dom";

const Burgers = ()=>{
    return (
        <>
        <h1>Burgers are heavy and tasty</h1>
        <img src="https://media1.giphy.com/media/IgOEWPOgK6uVa/giphy.gif"/>
        <NavLink exact to="/">Go back!</NavLink>
        </>
    )
}

export default Burgers;