import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import InstituteDash from './pages/institute/DashBoard/Dashboard';
import Profile from './components/common/profile/Profile';
import ProfileEdit from './components/common/profile/ProfileEdit';
import ProfDashboard from './pages/prof/dashboard/ProfDashboard';
import ViewResponse from './pages/prof/Response/ViewResponse';
import {ToastContainer} from "react-toastify";
import JobSearch from './pages/JobSearch/JobSearch';
import ViewDetails from './components/student/ViewDetails/ViewDetails';
import Apply from './components/student/Apply/Apply';
import Applied from './components/student/Applied/Applied';
import Secure from './components/common/Secure/Secure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/institute" element={< Secure component = {InstituteDash} />} />
        <Route path="/profile" element={< Secure component = {Profile} />} />
        <Route path='/profileedit/:uid' element={< Secure component = {ProfileEdit} />} />
        <Route path="/student" element={< Secure component = {JobSearch} />}/>

        <Route path="/ViewDetails/:jobId" element={< Secure component = {ViewDetails} />}/>
        <Route path="/Apply/:jobId" element={< Secure component = {Apply} />}/>
        <Route path="/Applied" element={< Secure component = {Applied} />}/>

        <Route path="/professor" element={< Secure component = {ProfDashboard} />}/>
        <Route path="/getresponse/:jobId" element={< Secure component = {ViewResponse} />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
