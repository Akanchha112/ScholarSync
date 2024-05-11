import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import LandingPage from './pages/LandingPage/LandingPage';
// import SigninPage from './pages/SigninPage/SigninPage';
// import SignupPage from './pages/SignupPage/SignupPage';
import {ToastContainer} from "react-toastify";
import JobSearch from './pages/JobSearch/JobSearch';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} /> */}
        <Route path="/" element={<JobSearch/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
