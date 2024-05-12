import './JobSearch.css';
import Navbar from '../../components/common/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import {  firestore } from '../../services/firebase';
import {  collection, query, where, getDocs } from "firebase/firestore";
// import search from '../../components/img/search.jpg';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const JobSearch = () => {
  const navigate = useNavigate();
  const ViewDetails = (jobId) => {
    navigate(`/ViewDetails/${jobId}`);
  }
  const [searchQuery, setSearchQuery] = useState('');

  const [cards, setCards] = useState([]);
  //fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchJobs = async () => {
          const JobsRef = collection(firestore, "jobs");
          const q = query(JobsRef, where("status", "==", "open"));
          const querySnapshot = await getDocs(q);

          const jobs = [];
          querySnapshot.forEach((doc) => {

            jobs.push(doc);
          });//doc.data(),doc.ref.id
          // console.log(jobs)
          setCards(jobs)
          return jobs;
        };

        fetchJobs().then((job) => {
          // console.log("Jobs:", job);
        });

      } catch (error) {
        console.error('Error fetching professors:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // const title=cards.data().postion;
  const filteredCards = cards.filter((card) =>
    card.data().postion.toLowerCase().includes(searchQuery.toLowerCase())

  );

  return <>
    <Navbar />
    <div className="JobSearch">
      <div className='search'>
        {/* <img src={search} className='searchIcon' alt=""/> */}
        <input
          type="text"
          placeholder="Search for new opportunities "
          id='searchBar'
          value={searchQuery}
          onChange={handleSearchInputChange}

        />

      </div>

      <div className="card-container" id="card-container">
        {filteredCards.map((job) => (
          <div key={job.ref.id} className="card" id="card">
            <h2 className='Jobtitle'>{job.data().postion}</h2>

            <p className='salary'>{job.data().stipend}</p>

            <div className='JobstatusDiv'>
              <label className=''>Status:</label>
              <p className='Jobstatus'>{job.data().status}</p>
              <button onClick={() => { ViewDetails(job.ref.id) }}>View Details</button>
            </div>


          </div>
        ))}
      </div>
    </div>
  </>
};

export default JobSearch;