import './JobSearch.css';
import Navbar from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
// import search from '../../components/img/search.jpg';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const JobSearch = () => {
    const navigate=useNavigate();
    const ViewDetails=()=>{
        navigate('/ViewDetails');
    }
    const [searchQuery, setSearchQuery] = useState('');
  
    const [cards, setCards] = useState([
      { id: 1, Jobtitle: 'Jobtitle 1', salary: '$123' , Jobstatus:'Open' },
      {id: 2, Jobtitle: 'Jobtitle 2', salary: '$123' , Jobstatus:'Open'}
    ]);
  
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
 
    const filteredCards = cards.filter((card) =>
        card.Jobtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return <>
      <Navbar/>
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
          {filteredCards.map((card) => (
            <div key={card.id} className="card" id="card">
              <h2 className='Jobtitle'>{card.Jobtitle}</h2>

              <p  className='salary'>{card.salary}</p>
              
              <div className='JobstatusDiv'>
                <label className=''>Status:</label>
                <p  className='Jobstatus'>{card.Jobstatus}</p>
                <button onClick={()=>{ViewDetails()}}>View Details</button>
              </div>
            
              
            </div>
          ))}
        </div>
      </div>
  </>
  };
  
  export default JobSearch;