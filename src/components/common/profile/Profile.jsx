import "./profile.css"
import { useState, useEffect } from 'react';
import InstituteNav from "../../institute/instituteNav/InstituteNav";
// import { useEffect } from "react";
import ProfNav from "../../professor/profNav/ProfNav";
import { useNavigate } from "react-router-dom";
import { doc, collection, query, where, getDoc } from "firebase/firestore";
import { firestore } from '../../../services/firebase';


const Profile = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const role = localStorage.getItem('role');
    const uid = localStorage.getItem('uid');
    const [Name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [College, setCollege] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [areaOfWork, setAreaOfWork] = useState(null);

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
    // var { Name = null, description = null, Education = null, College = null, qualification = null, areaOfWork = null } = {};
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const userDoc = doc(firestore, "users", uid);
                const userSnapshot = await getDoc(userDoc);
                const userData = userSnapshot.data();
                

                setName(userData.name);
                setDescription(userData.description);
                if (role !== 'institute') {
                    setCollege(userData.college);
                    setQualification(userData.qualification);
                    setAreaOfWork(userData.areaofWork);
                    console.log(userData.areaofWork)
                }

            } catch (error) {
                console.error('Error fetching professors:', error);
            }
        }
        fetchdata();
    }, []);
    const ProfileEditHandle = () => {
        const uid = localStorage.getItem('uid');
        navigate(`/profileedit/${uid}`);
    }

    return <>
        {role === 'institute' ? <InstituteNav /> : (role === 'professor' ? <ProfNav /> : <></>)}
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
                        <h2 className="first-name">{Name}</h2>

                        <div className="areaOfWork">Area of Work: {areaOfWork} </div >

                    </section>
                    <p className="profile-info description">
                        
                        {description ? description : <div> hello, I'm {Name? Name : null}, artist and my major {areaOfWork}. </div>}
                    </p>
                    {role !== 'institute' && (<div className="otherInfo">
                        
                        
                            <h3 className="Qualification">Qualification:<span> {qualification ? qualification : "no information"}</span></h3>
                            <h3 className="Qualification">College:<span> {College ? College : "no information"}</span></h3>
                        

                    </div>)}
                    <div className="social-profile">
               

                        <a><i className="fa fa-envelope"></i></a>
                        {/* <a><i className="fa fa-instagram"></i></a> */}
                        <a><i className="fa fa-linkedin"></i></a>
                        <a><i className="fa fa-twitter"></i></a>


                    </div>

                    <button onClick={() => { ProfileEditHandle() }}>Edit</button>
                </section>
                {/* <button className="icon close"></button> */}
            </main>
        </div>
    </>
}
export default Profile;