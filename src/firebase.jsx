// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5JFloq9SmIiNfPfBvDGLAd_GKT95CdDY",
  authDomain: "schh-d002e.firebaseapp.com",
  projectId: "schh-d002e",
  storageBucket: "schh-d002e.firebasestorage.app",
  messagingSenderId: "649066150345",
  appId: "1:649066150345:web:f150f71349646fa9f75018",
  measurementId: "G-D48KQ41MK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
import { getAuth } from 'firebase/auth'; // If you need Auth
export const auth = getAuth(app);