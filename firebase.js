// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHf3wrW8cvMOI8fYiUtmq82XPM0mjVZnk",
    authDomain: "desert-color-usa-c75d0.firebaseapp.com",
    projectId: "desert-color-usa-c75d0",
    storageBucket: "desert-color-usa-c75d0.appspot.com",
    messagingSenderId: "969647165561",
    appId: "1:969647165561:web:771a3dde650cdad23084a8",
    measurementId: "G-11KH11P271"
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);