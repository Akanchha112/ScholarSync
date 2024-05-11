import React, { useState } from 'react';
import { auth, firestore } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import "./signup.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate();
  const handleSignUp = async () => {
    setEmailError('')
    setPasswordError('')
    if ('' === email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter your email')
      return
    }
    if ('' === password || password.length < 7) {
      setPasswordError('Password length must be 6')
      return
    }
    if (role == "professor") {
      toast.error("Contact your university to register your mail");
      return
    }
    try {

      await createUserWithEmailAndPassword(auth, email, password);  //to create user auth
      const user = auth.currentUser;
      console.log(user.uid, role);

      if (user) {
        await setDoc(doc(firestore, "users", user.uid), {              // to save user credentials in database
          email: user.email,
          role: role
        });
      }
      localStorage.setItem('role', role);
      localStorage.setItem('userdata',JSON.stringify(user));
      localStorage.setItem('uid',user.uid);
      toast.success("Registered Successfully", { position: "top-center" });
      if (role == 'institute') {
        navigate('/institute')
      } else if (role == 'student') {
        navigate('/student')
      } 

      // Redirect or show success message
    } catch (error) {
      console.error(error);
      toast.success(error.msg, { position: "bottom-center" });
      // Handle error
    }
    setEmail('');
    setPassword('');
  };




  return <>
    <Navbar />

    <div className="sign-container">
      <div className='sign-Card'>
        <h2>Sign Up</h2>
        <div className='inputContainer'>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className='inputContainer'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => { setRole(e.target.value); console.log(role); }} placeholder='role'>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="institute">Institute</option>
          </select>
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        <label>Alreasy have account?<span className='signnavigator' onClick={() => { navigate('/signin') }}> Sign in</span></label>
      </div>
    </div>
  </>
};

export default SignupPage;
