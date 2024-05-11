import React from 'react';
import './Apply.css';
const ApplyForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="apply-form-container">
      <div className="apply-form-card">
        <h2>Application</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="question">Why should you be hired for this role?</label>
          <textarea id="question" rows="4" required></textarea>
          <br />
          <label htmlFor="availability">Are you available for the stipulated time period?</label>
          <textarea id="availability" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
