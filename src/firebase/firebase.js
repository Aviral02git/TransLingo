
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "languagetranslator-4f99a.firebaseapp.com",
  projectId: "languagetranslator-4f99a",
  storageBucket: "languagetranslator-4f99a.appspot.com",
  messagingSenderId: "464448386528",
  appId: "1:464448386528:web:9e6e717f44ca74cb1f6785",
  measurementId: "G-44GYPPT1XC"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
