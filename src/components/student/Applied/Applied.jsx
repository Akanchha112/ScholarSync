import {useState,useEffect} from 'react'
import './index.css';
import { doc, collection, query, where, getDocs, getDoc,updateDoc } from "firebase/firestore";
import { firestore } from '../../../services/firebase';
import BeatLoader from "react-spinners/BeatLoader";
import StuNav from '../studentNav/StuNav';
const Applied=()=>{
    const [applied, setapplied] = useState([]);
    const [loading, setloading] = useState(true);
    const uid=localStorage.getItem('uid');
    console.log(uid);

    useEffect(() => {
        //fetch candidate data
        const getjobdata = async (jobid) => {
            setloading(true);
            const jobDoc = doc(firestore, "jobs", jobid);
            const jobSnapshot = await getDoc(jobDoc);
            const jobData = jobSnapshot.data();
            return jobData;
        }
        //fetch all pending responses
        const fetchResponse = async () => {
            try {
                // setloading(true);
                const fetchResponse = async () => {

                    const ResponseRef = collection(firestore, "response");
                    const q = query(ResponseRef, where("userId", "==", uid));
                    const querySnapshot = await getDocs(q);

                    const Response = [];
                    querySnapshot.forEach(async (doc) => {
                        // console.log(doc.data())
                        const jobid = doc.data().jobId;
                        const jobData = await getjobdata(jobid);
                        const combinedData = { jobData, responseData: doc };
                        console.log(combinedData);
                        Response.push(combinedData);
                    });

                    setapplied(Response)

                    return Response;
                };

                fetchResponse()

            } catch (error) {
                console.error('Error fetching professors:', error);
            }
            finally {
                // setloading(false);
            }

        };

        fetchResponse();
    }, []);

    //loading 
    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 5000);
    }, [applied])



return<>
<StuNav/>
<div className='Appliedjob'>
            {loading ?
                <BeatLoader
                    color="#00a2bb"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                <div className="Appliedjob-container">
                    <h2>Applied</h2>

                    <ul className='subcontainer'>

                        { applied.map((response, index) => (

                            <p key={index} className="eachresponse">
                                
                                <p><strong>Position:</strong> {response.jobData.postion}</p>
                                <p><strong>Status:</strong> {response.jobData.status}</p>
                                <p><strong>Duration:</strong> {response.jobData.duration}</p>
                                <p><strong>Stipend:</strong> {response.jobData.stipend}</p>
                                <p><strong>status:</strong> <i> {response.responseData.data().status}</i></p>
                                
                                {/* <button onClick={() => { handleAccept(response.responseData.ref.id) }}>Accept</button>
                                <button onClick={() => { handleReject(response.responseData.ref.id) }}>Reject</button> */}
                            </p>
                        )) }

                    </ul>

                </div>
            }
        </div>
</>
}
export default Applied;