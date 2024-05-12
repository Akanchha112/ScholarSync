import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { firestore } from '../../../services/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StuNav from '../studentNav/StuNav';
import './Apply.css';
const ApplyForm = ({ onSubmit }) => {
  const navigate=useNavigate();
  const [question, setquestion] = useState('');
  const [availability, setavailability] = useState('');
  console.log(question, availability)
  const { jobId } = useParams();
  const uid = localStorage.getItem('uid');

  const question1 = "Why should you be hired for this role?";
  const question2 = "Are you available for the stipulated time period?";
  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = {
      questoin1: question1,
      answer1: question,
      question2: question2,
      answer2: availability,
      jobId: jobId,
      userId: uid
    }
    try {
      const newJobRef = doc(collection(firestore, "response"));
      await setDoc(newJobRef, response);

      toast.success("Response Sent Successfully", { position: "top-center" });
      setquestion('');
      setavailability('');
     
      navigate('/student')
    } catch (error) {
      console.error(error);
      toast.error(error.message, { position: "bottom-center" });
    }
  };


  return (
    <>
    <StuNav/>
    <div className="apply-form-container">
      <div className="apply-form-card">
        <h2>Application</h2>
        <form onSubmit={handleSubmit}>
          <label className="question" htmlFor="question">{question1}</label>
          <textarea id="question" rows="4" value={question} onChange={(e) => setquestion(e.target.value)} required></textarea>
          <br />
          <label className="question" htmlFor="availability">{question2}</label>
          <textarea id="availability" rows="4" value={availability} onChange={(e) => setavailability(e.target.value)} required></textarea>
          <button className="buttonSubmit" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ApplyForm;
