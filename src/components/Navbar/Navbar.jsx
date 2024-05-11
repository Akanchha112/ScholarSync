import React from 'react';
import './Navbar.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate=useNavigate();
    const loginhandle=()=>{
        navigate('/signin');
    }
    const signuphandle=()=>{
        navigate('/signup');
    }
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
                    <a href="#" className="nav-link" onClick={()=>{loginhandle()}} >Login</a>
                    <a href="#" className="nav-link" onClick={()=>{signuphandle()}} >SignUp</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
