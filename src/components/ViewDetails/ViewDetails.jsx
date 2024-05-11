//jobsearch->view details
import React from 'react';
import './ViewDetails.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const ViewDetails = () => {
  // const navigate=useNavigate();
  //   const handleApply=()=>{
  //       navigate('/Apply');
  //   }

  const jobDetails = {
    jobtitle: 'JRF',
    salary: '$100,000',
    jobstatus: 'Open',
    jobdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    monthsofjob: 12 // number of months
  };
  

  return <>
    <Navbar />
    <div className="job-details-container">
      <div className="job-details-card">

        <h2>{jobDetails.jobtitle}</h2>
        
        <div className="jobcontainer">
        <p>Salary: {jobDetails.salary}</p>
        <p>Status: {jobDetails.jobstatus}</p>
        </div>
        <p className='duration'>Duration: {jobDetails.monthsofjob}</p>
        <p className='description'>Description: {jobDetails.jobdescription}</p>
        
        <button onClick={navigate('/Apply')}>Apply</button>
      </div>
    </div>
  </>
};

export default ViewDetails;
