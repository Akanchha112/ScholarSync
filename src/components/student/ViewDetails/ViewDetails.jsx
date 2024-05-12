//jobsearch->view details
import {useEffect,useState} from 'react';
import './ViewDetails.css';
import StuNav from '../studentNav/StuNav';
import { useNavigate ,useParams} from 'react-router-dom';
import {  firestore } from '../../../services/firebase';
import {    getDoc,doc } from "firebase/firestore";


const ViewDetails = () => {
  const navigate=useNavigate();

  const {jobId}=useParams();

  const [job, setJobs] = useState([]);
  //fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchJobs = async () => {

          const JobsRef = doc(firestore, "jobs",jobId);
          const querySnapshot = await getDoc(JobsRef);


          setJobs(querySnapshot.data())
          return querySnapshot;
        };

        fetchJobs()
      } catch (error) {
        console.error('Error fetching professors:', error);
      }
    };

    fetchJobs();
  }, []);

  
  // const jobId=job.ref.id;
  return <>
    <StuNav/>
    <div className="job-details-container">
      <div className="job-details-card">

        <h2>{job.postion}</h2>
        
        <div className="jobcontainer">
        <p>Salary: {job.stipend}</p>
        <p>Status: {job.status}</p>
        </div>
        <p className='duration'>Duration: {job.duration}</p>
        <p className='description'>Description: {job.description}</p>
        
        <button onClick={()=>{navigate(`/Apply/${jobId}`)}}>Apply</button>
      </div>
    </div>
  </>
};

export default ViewDetails;

