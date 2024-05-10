import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png';
function Navbar(){
    return(
        <div id="navbar">
            <div className="Navbar-content-div">
                <a href="#home-sec">
                    <img
                        src={logo}
                        alt="ScholarSync Logo"
                        id="Navbar-img"
                    /></a> 
                <nav id="nav-bar">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#connect" className="nav-link">Connect</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                    <a href="#" className="nav-link">Login</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
