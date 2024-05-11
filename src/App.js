import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import InstituteDash from './pages/institute/DashBoard/Dashboard';
import Profile from './components/profile/Profile';
import {ToastContainer} from "react-toastify";
import JobSearch from './pages/JobSearch/JobSearch';
import ViewDetails from './components/ViewDetails/ViewDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/institute" element={<InstituteDash/>} />
        <Route path="/profile" element={<Profile/>} /> */}

        <Route exact path="/" element={<JobSearch/>}/>
        <Route path="/ViewDetails" element={<ViewDetails/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
