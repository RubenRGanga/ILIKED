import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import "./styles/navbar_styles.css"
import logo from "../assets/LOGO2.png"

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {setClicked(!clicked)}
    return(
        <>
        <nav>
            <NavLink to="/home"><img src={logo} className="App-logo" alt="ILIKED!"/></NavLink>
            <div id='cajaTexto'>
                <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
                    <li><NavLink to="/login">LOGIN</NavLink></li>
                    <li><NavLink to="/usuario">USUARIO</NavLink></li>
                </ul>
            </div>
            <div id='mobile' onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </>
    )}


export default Navbar;