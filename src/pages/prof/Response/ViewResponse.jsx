import { useParams } from 'react-router-dom';
import GetRes from '../../../components/professor/getResponse/GetRes';
import ProfNav from '../../../components/professor/profNav/ProfNav';
const ViewResponse = () => {
  const { jobId } = useParams();

  // Use jobId to fetch data related to the job

  return (
    <>
    <ProfNav />
    <GetRes props={jobId} />
    </>
  );
};

export default ViewResponse;