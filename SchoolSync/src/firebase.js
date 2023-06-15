import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChSG1kn27PL-BI0TrqgiFtqBAcgUu_Svk",
    authDomain: "schoolsystem-216b8.firebaseapp.com",
    projectId: "schoolsystem-216b8",
    storageBucket: "schoolsystem-216b8.appspot.com",
    messagingSenderId: "310563481673",
    appId: "1:310563481673:web:55fc88a0bfa8eba15ab798",
    measurementId: "G-BW6PPWTW8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export default firebase;