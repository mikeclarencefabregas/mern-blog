// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-bfeec.firebaseapp.com",
  projectId: "mern-bfeec",
  storageBucket: "mern-bfeec.appspot.com",
  messagingSenderId: "54009987513",
  appId: "1:54009987513:web:bdfb7f0ccd93e368e43668",
  measurementId: "G-BGVQQVXK87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
