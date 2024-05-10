import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div id="Navbar">
            <div className="Navbar-content-div">
                <a href="#home-sec">
                    <img
                        src=""
                        alt="Company Logo"
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
