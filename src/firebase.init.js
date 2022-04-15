// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjk8Y381W_XkNftmSBS_ZSeBy5D8S08jA",
    authDomain: "cars-repairs-bd.firebaseapp.com",
    projectId: "cars-repairs-bd",
    storageBucket: "cars-repairs-bd.appspot.com",
    messagingSenderId: "191914462410",
    appId: "1:191914462410:web:39d4a942008a98eda53833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;