import { useParams } from 'react-router-dom';

const GetRes = () => {
    
  const { jobId } = useParams();
  console.log(jobId);
  // Use jobId to fetch data related to the job

  return (
    <div>
      <h2>Response Page</h2>
      <p>Job ID: {jobId}</p>
    </div>
  );
};

export default GetRes;