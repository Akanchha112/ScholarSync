import { useEffect, useState } from 'react';
import "./index.css";
import { auth, firestore } from '../../../services/firebase';
import { doc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";

const DisplayJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setloading] = useState(false);
    const profid = localStorage.getItem('uid');
    const navigate = useNavigate();
    // console.log(profid);
    
    useEffect(() => {
        setloading(true);
        const fetchJobs = async () => {
            try {
                
                const fetchJobs = async (profid) => {
                    const JobsRef = collection(firestore, "jobs");
                    const q = query(JobsRef, where("status", "==", "open"), where("professorid", "==", profid));
                    const querySnapshot = await getDocs(q);

                    const jobs = [];
                    querySnapshot.forEach((doc) => {

                        jobs.push(doc);
                    });//doc.data(),doc.ref.id
                    // console.log(jobs)
                    setJobs(jobs)
                    setloading(false);
                    return jobs;
                };

                fetchJobs(profid).then((job) => {
                    // console.log("Jobs:", job);
                });

            } catch (error) {
                console.error('Error fetching professors:', error);
            }
            setloading(false);
        };

        fetchJobs();
    }, []);

    const handleClose = async (jobId) => {
        try {
            await deleteDoc(doc(firestore, "jobs", jobId));
            toast.success("Deleted Successfully", { position: "top-center" });
        } catch (error) {
            toast.success(error.msg, { position: "bottom-corner" });
            console.error('Error fetching professors:', error);
        }
    }

    const handleResponse = (jobId) => {
        navigate(`/getresponse/${jobId}`);
    }

    return <>
        <div className='professorsjobs'>
            
                <div className="professorsjobs-container">
                    <h2>Jobs</h2>
                    {loading ?
                    
                <BeatLoader
                    color="#00a2bb"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                    <ul className='subcontainer'>
                        {jobs.map((job, index) => (

                            <li key={index} className="eachjob">

                                <h3>{job.data().postion}</h3>
                                <p>Description: {job.data().description}</p>
                                <p>Status: {job.data().status}</p>
                                <p>Stipend: {job.data().stipend}</p>
                                <p>Duration: {job.data().duration}</p>
                                <button onClick={() => { handleClose(job.ref.id) }}>Close Job</button>
                                <button onClick={() => { handleResponse(job.ref.id) }}>Responses</button>
                            </li>
                        ))}
                    </ul>
}
                </div>
            
        </div>
    </>
}

export default DisplayJobs;