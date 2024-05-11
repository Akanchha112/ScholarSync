import "./index.css";
import { useState } from "react";
import { auth, firestore } from '../../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProf = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleAdd = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setEmailError('');
        setPasswordError('');

        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Please enter a valid email');
            return;
        }
        
        if (!password || password.length < 6) {
            setPasswordError('Password length must be at least 6 characters');
            return;
        }
        const institueid=localStorage.getItem('uid');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                await setDoc(doc(firestore, "users", user.uid), {
                    email: user.email,
                    role: 'professor',
                    institueid:institueid
                });
            }

            toast.success("Added Successfully", { position: "top-center" });

            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
            toast.error(error.message, { position: "bottom-center" });
        }
    };

    return (
        <div className="addProfContainer">
            <div className="subcontainerAdd">
                <h1>Add Professor</h1>
                <form onSubmit={handleAdd}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddProf;
