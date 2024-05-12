import "./profile.css"
import InstituteNav from "../../institute/instituteNav/InstituteNav";
import { useEffect } from "react";
import ProfNav from "../../professor/profNav/ProfNav";
import {useNavigate} from "react-router-dom";

const Profile = (props) => {
    const navigate=useNavigate();
    const role = localStorage.getItem('role');
    // console.log(localStorage);

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
    const { UserName, CurrentCompany, gitUrl = null, LinkedinID = null, email = null, ImageLink = null, Designation = null, Batch = null, Education = null, PastCompany = null, Description = null, CurrentPosition = null } = localStorage.getItem('userdata') || {};

    const ProfileEditHandle= () =>{
        const uid=localStorage.getItem('uid');
        navigate(`/profileedit/${uid}`);
    }

    return <>
        {role === 'institute' ? <InstituteNav /> : (role === 'professor' ?<ProfNav/>:<></>)}
        <div className="profilecontaitner">
            <main className="profile">
                <div className="profile-bg"></div>
                <section className="container">
                    <aside className="profile-image">
                        <img
                            src={"https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600"}

                        />

                    </aside>
                    <section className="profile-info">
                        <h1 className="first-name">Avnish</h1>

                        {/* {props.user ? <h2 className="companyInfo">{CurrentPosition} @ {CurrentCompany}</h2 > : <h2 className="companyInfo">ABOUT</h2>} */}

                    </section>
                    <p className="profile-info description">
                        {Description ? Description : <div> hello, I'm {props.user ? UserName : null}, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!</div>}
                    </p>
                    <div className="otherInfo">
                        {/* <h3>Worked at: <span> {PastCompany ? PastCompany : "no information"}</span></h3>
                    <h3>Batch:<span> {Batch ? Batch : "no information"}</span></h3> */}
                        {role !== 'institute' && (
                            <h3>College:<span> {Education ? Education : "no information"}</span></h3>
                        )}

                    </div>
                    <div className="social-profile">
                        {/* <a href={"mailto:" + email ? email : null}> <EmailIcon /> </a> */}
                        {/* <a href={props.user ? LinkedinID : null}><LinkedInIcon /></a> */}
                        
                            
                            <a><i className="fa fa-envelope"></i></a>
                            {/* <a><i className="fa fa-instagram"></i></a> */}
                            <a><i className="fa fa-linkedin"></i></a>
                            <a><i className="fa fa-twitter"></i></a>
                        

                    </div>

                    <button onClick={()=>{ProfileEditHandle()}}>Edit</button>
                </section>
                {/* <button className="icon close"></button> */}
            </main>
        </div>
    </>
}
export default Profile;