import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./profileedit.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firestore } from '../../../services/firebase';
import { doc, updateDoc } from "firebase/firestore";

const ProfileEdit = () => {
    const navigate = useNavigate();
    const { uid } = useParams();
    const role=localStorage.getItem('role');
    console.log(role);

    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [College, setCollege] = useState('');
    const [qualification, setqualification] = useState('');
    const [areaofWork, setareaofWork] = useState('');
    
    console.log(uid)
    const handleAdd =async(e)=>{
        e.preventDefault();
        try{
            if(role=='institute'){
                await updateDoc(doc(firestore, "users", uid), {              // to save user credentials in database
                    name: Name,
                    description: description
                  });
            }
            else{
                await updateDoc(doc(firestore, "users", uid), {              // to save user credentials in database
                    name: Name,
                    description: description,
                    college: College,
                    qualification: qualification,
                    areaofWork: areaofWork
                  });
            }
            toast.success("Updated Successfully", { position: "top-center" });
            navigate('/profile');
        }catch (error) {
            console.error(error);
            toast.success(error.msg, { position: "bottom-center" });
            // Handle error
          }
    }

    return <>
        <div className="ProfileEditContainer">
            <div className="subcontainerProfileEdit">
                <h1>Edit Profile</h1>
                <form onSubmit={handleAdd}>
                    <div>
                        <div>
                            <label>Name</label>
                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required />
                        </div>
                        {role!="institute"?<div>
                            <label>College</label>
                            <input type="text" value={College} onChange={(e) => setCollege(e.target.value)} placeholder='Enter College' required />
                        </div>:<></>}
                        
                        {role!="institute"?<div>
                            <label>qualification</label>
                            <input type="text" value={qualification} onChange={(e) => setqualification(e.target.value)} placeholder='Enter highest qualification' required />
                        </div>:<></>}
                        {role=="institute"?<div>
                            <label>Description</label>
                            <textarea
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter Description"
                                required
                                rows="4"
                            />
                        </div>:<></>}
                        {role=="institute"?<button type="submit">Edit</button>:<></>}
                    </div>
                    <div>
                       
                        {role!="institute"?<div>
                            <label>Area Of Work</label>
                            <input type="text" value={areaofWork} onChange={(e) => setareaofWork(e.target.value)} placeholder='Enter your Area Of Work' required />
                        </div>:<></>}
                        {role!="institute"?<div>
                            <label>Description</label>
                            <textarea
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter Description"
                                required
                                rows="4"
                            />
                        </div>:<></>}

                        {role!="institute"?<button type="submit">Edit</button>:<></>}
                    </div>
                </form>
            </div>
        </div>

    </>
}

export default ProfileEdit