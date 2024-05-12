import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./profileedit.css";
const ProfileEdit = () => {
    const navigate = useNavigate();
    const { uid } = useParams();
    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [College, setCollege] = useState('');
    const [duration, setDuration] = useState('');
    const [qualification, setqualification] = useState('');
    const [areaofWork, setareaofWork] = useState('');

    const handleAdd =()=>{}
    return <>
        <div className="ProfileEditContainer">
            <div className="subcontainerProfileEdit">
                <h1>Add Job</h1>
                <form onSubmit={handleAdd}>
                    <div>
                        <div>
                            <label>Name</label>
                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required />
                        </div>
                        <div>
                            <label>College</label>
                            <input type="text" value={College} onChange={(e) => setCollege(e.target.value)} placeholder='Enter College' required />
                        </div>
                        <div>
                            <label>Duration</label>
                            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='Enter Duration' required />
                        </div>
                        <div>
                            <label>qualification</label>
                            <input type="text" value={qualification} onChange={(e) => setqualification(e.target.value)} placeholder='Enter highest qualification' required />
                        </div>
                    </div>
                    <div>
                       
                        <div>
                            <label>Area Of Work</label>
                            <input type="text" value={areaofWork} onChange={(e) => setareaofWork(e.target.value)} placeholder='Enter your Area Of Work' required />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea
                                type="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter Description"
                                required
                                rows="4"
                            />
                        </div>

                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>

    </>
}

export default ProfileEdit