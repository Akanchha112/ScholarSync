import React from 'react';
import '../../common/Navbar/Navbar.css';
import logo from '../../common/img/logo.png'
// import logo from '../../../common/img/logo.png';
import { useNavigate } from 'react-router-dom';

function ProfNav(){
    const navigate=useNavigate();

    const profilehandle=()=>{
        navigate('/profile');
    }
    const homehandle=()=>{
        navigate('/professor');
    }
    return(
        <div id="navbar">
            <div className="Navbar-content-div" style={{"marginRight":"80px","marginLeft":"80px"}}>
                <a href="#home-sec" onClick={()=>{homehandle()}}>
                    <img
                        src={logo}
                        alt="ScholarSync Logo"
                        id="Navbar-img"
                    /></a> 
                <nav id="nav-bar">
                    <a href="#about" className="nav-link" onClick={()=>{profilehandle()}} >Profile</a>
                    {/* <a href="#connect" className="nav-link" onClick={()=>{homehandle()}}>Connect</a>
                    <a href="#contact" className="nav-link" onClick={()=>{homehandle()}}>Contact Us</a>
                    <a href="#" className="nav-link" onClick={()=>{loginhandle()}} >Login</a>
                    <a href="#" className="nav-link" onClick={()=>{signuphandle()}} >SignUp</a> */}
                </nav>
            </div>
        </div>
    )
}

export default ProfNav;