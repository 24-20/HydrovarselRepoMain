// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy8LBBrW46dt9kD2gcISRya2JwIcgmhC0",
  authDomain: "hydrovarsel.firebaseapp.com",
  projectId: "hydrovarsel",
  storageBucket: "hydrovarsel.appspot.com",
  messagingSenderId: "932764979307",
  appId: "1:932764979307:web:50c5bb07eb8eb5682ee12e",
  measurementId: "G-WXG0X3GTYR"
};
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:5173/verifisering?email',
  // This must be true.
  handleCodeInApp: true
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {auth, analytics, db, actionCodeSettings}