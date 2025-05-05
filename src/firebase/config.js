// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAJfpMNrJtNfFhLfPegXJwa_OuAcnTUGU",
  authDomain: "languagetranslator-4f99a.firebaseapp.com",
  projectId: "languagetranslator-4f99a",
  storageBucket: "languagetranslator-4f99a.firebasestorage.app",
  messagingSenderId: "464448386528",
  appId: "1:464448386528:web:9e6e717f44ca74cb1f6785",
  measurementId: "G-44GYPPT1XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);