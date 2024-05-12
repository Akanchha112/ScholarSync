import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./index.css"
import { doc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { firestore } from '../../../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";

const GetRes = () => {
    const [responses, setresponses] = useState([]);
    const [loading, setloading] = useState(false);
    const { jobId } = useParams();
    console.log(jobId);
    // Use jobId to fetch data related to the job
    useEffect(() => {
        const fetchResponse = async () => {
            try {
                setloading(true);
                const fetchResponse = async (jobId) => {
                    const ResponseRef = collection(firestore, "response");
                    const q = query(ResponseRef, where("jobId", "==", jobId));
                    const querySnapshot = await getDocs(q);

                    const Response = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data())
                        Response.push(doc);
                    });//doc.data(),doc.ref.id

                    setresponses(Response)
                    setloading(false);
                    return Response;
                };

                fetchResponse(jobId)

            } catch (error) {
                console.error('Error fetching professors:', error);
            }
            setloading(false);
        };

        fetchResponse();
    }, []);
    return (
        <div className='professorsResponse'>
            {loading ?
                <BeatLoader
                    color="#00a2bb"
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                <div className="professorsResponse-container">
                    <h2>Responses</h2>
                    <ul className='subcontainer'>
                        {responses.map((response, index) => (

                            <li key={index} className="eachresponse">

                                {/* <h3>{response.data().postion}</h3> */}
                                <p>Description: {response.data().questoin1}</p>
                                <p>Status: {response.data().answer1}</p>
                                <p>Stipend: {response.data().question2}</p>
                                <p>Duration: {response.data().answer2}</p>
                                {/* <button onClick={() => { handleClose(job.ref.id) }}>Close Job</button> */}
                                {/* <button onClick={() => { handleResponse(job.ref.id) }}>Responses</button> */}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default GetRes;