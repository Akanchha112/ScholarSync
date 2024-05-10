import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtG0VBhBpYxTYpfwW-7SSHVEr7NRN8zS0",
    authDomain: "scholarsync-3d967.firebaseapp.com",
    projectId: "scholarsync-3d967",
    storageBucket: "scholarsync-3d967.appspot.com",
    messagingSenderId: "910808095274",
    appId: "1:910808095274:web:3d8791cfb9dbc311e90153",
    measurementId: "G-T6K74PXKSZ"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore=getFirestore(app)
export {auth,firestore}

