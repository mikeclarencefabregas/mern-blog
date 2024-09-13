// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c544f.firebaseapp.com",
  projectId: "mern-blog-c544f",
  storageBucket: "mern-blog-c544f.appspot.com",
  messagingSenderId: "91279752985",
  appId: "1:91279752985:web:7f64dc97cf9a8544dc0f88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
