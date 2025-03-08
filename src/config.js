// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSkuNj1CGdOXmm907XBU3GhKSg_7HLVU4",
  authDomain: "assignment2-5788b.firebaseapp.com",
  projectId: "assignment2-5788b",
  storageBucket: "assignment2-5788b.firebasestorage.app",
  messagingSenderId: "546217580137",
  appId: "1:546217580137:web:e541b5ebfaf320ed1274f8",
  measurementId: "G-18WEFQQCCS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;