import React from 'react';
import { useEffect } from 'react';
import logo from '../../common/img/logo.png'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../common/Navbar/Navbar.css';

function StuNav(){
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const profilehandle=()=>{
        navigate('/profile');
    }
    const homehandle=()=>{
        navigate('/student');
    }
    const appliedhandle=()=>{
        navigate('/Applied');
    }
    const logouthandle = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.clear();
            navigate("/");
            console.log("Signed out successfully")
            toast.success("Signed out Successfully", { position: "top-center" });
        }).catch((error) => {
            // An error happened.
            console.error(error);
            toast.success(error.msg, { position: "bottom-center" });
        });
    }
    //to add cdn link
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return(
        <div id="navbar">
            <div className="Navbar-content-div" >
                <a href="#home-sec" onClick={()=>{homehandle()}}>
                    <img
                        src={logo}
                        alt="ScholarSync Logo"
                        id="Navbar-img"
                    /></a> 
                    <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <nav id="nav-bar" className={click ? "active" : ""}>
                    <a href="#" className="nav-link" onClick={()=>{appliedhandle()}}>Applied</a>
                    <a href="#about" className="nav-link" onClick={()=>{profilehandle()}} >Profile</a>
                    <a href="#" className="nav-link" onClick={() => { logouthandle() }}>Logout</a>
                
                </nav>
            </div>
        </div>
    )
}

export default StuNav;