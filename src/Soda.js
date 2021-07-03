import React from "react";
import {NavLink} from "react-router-dom";

const Soda = ()=>{
    return (
        <>
        <h1>Soda Entertainment</h1>
        <img src="https://media4.giphy.com/media/ihiR0WqUoZPJS/giphy.gif"/>
        <NavLink exact to="/">Go back!</NavLink>
        </>
    )
}

export default Soda;