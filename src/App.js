import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import InstituteDash from './pages/institute/DashBoard/Dashboard';
import Profile from './components/profile/Profile';
import ProfDashboard from './pages/prof/dashboard/ProfDashboard';
import ViewResponse from './pages/prof/Response/ViewResponse';
import {ToastContainer} from "react-toastify";
import JobSearch from './pages/JobSearch/JobSearch';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Apply from './components/Apply/Apply';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/institute" element={<InstituteDash/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/student" element={<JobSearch/>}/>

        <Route path="/ViewDetails" element={<ViewDetails/>}/>
        <Route path="/Apply" element={<Apply/>}/>
       

        <Route path="/professor" element={<ProfDashboard/>}/>
        <Route path="/getresponse/:jobId" element={<ViewResponse/>} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
