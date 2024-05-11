import './index.css';
import { useEffect, useState } from 'react';
import { auth, firestore } from '../../../services/firebase';
import {collection, query, where, getDocs } from "firebase/firestore";
const GetProf = () => {
    const [professor, setProfessors] = useState([]);
    const instituteId = localStorage.getItem('uid'); // Replace with your institute ID
    console.log(instituteId);
    useEffect(() => {
        const fetchProfessors = async () => {
            try {
                const fetchProfessors = async (instituteId) => {
                    const professorsRef = collection(firestore, "users");
                    const q = query(professorsRef, where("role", "==", "professor"), where("institueid", "==", instituteId));
                    const querySnapshot = await getDocs(q);
                  
                    const professors = [];
                    querySnapshot.forEach((doc) => {
                      professors.push(doc.data());
                    });
                    setProfessors(professors)
                    return professors;
                  };
                  
                  fetchProfessors(instituteId).then((professors) => {
                    console.log("Professors:", professors);
                  });
                // setProfessors(professorsData);
            } catch (error) {
                console.error('Error fetching professors:', error);
            }
        };

        fetchProfessors();
    }, [instituteId]);

    return (
        <div className='istituteprofessors'>
            <div className="istituteprofessors-container">
                <h2>Professors</h2>
                <ul className='subcontainer'>
                    {professor.map((Professor, index) => (

                        <li key={index} className="eachprof">
                            <h3>Professor</h3>
                            <p>Email: {Professor.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default GetProf;