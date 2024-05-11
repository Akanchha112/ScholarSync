import './index.css';
import { useState } from 'react';
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from '../../../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfJobAdd = () => {
    const [position, setPosition] = useState('');
    const [stipend, setStipend] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const handleAdd = async (e) => {
        e.preventDefault();
        const profid = localStorage.getItem('uid');
        const job = {
            postion: position,
            stipend: stipend,
            duration: duration,
            description: description,
            status:status,
            professorid: profid
        }
        try {
            const newJobRef = doc(collection(firestore, "jobs"));
            await setDoc(newJobRef, job);

            toast.success("Added Successfully", { position: "top-center" });
            setPosition('');
            setDescription('');
            setDuration('');
            setStipend('');

        } catch (error) {
            console.error(error);
            toast.error(error.message, { position: "bottom-center" });
        }

    }
    return <>
        <div className="addJobContainer">
            <div className="subcontainerJob">
                <h1>Add Job</h1>
                <form onSubmit={handleAdd}>
                    <div>
                        <div>
                            <label>Position</label>
                            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder='Enter Position' required />
                        </div>
                        <div>
                            <label>Stipend</label>
                            <input type="text" value={stipend} onChange={(e) => setStipend(e.target.value)} placeholder='Enter Stipend' required />
                        </div>
                        <div>
                            <label>Duration</label>
                            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='Enter Duration' required />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label>Status</label>
                            <select value={status} onChange={(e) => { setStatus(e.target.value); console.log(status); }}>
                                <option value="open">Open</option>
                                <option value="close">Close</option>

                            </select>
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
export default ProfJobAdd;