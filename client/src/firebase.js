// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "dreamhome-47a4e.firebaseapp.com",
  projectId: "dreamhome-47a4e",
  storageBucket: "dreamhome-47a4e.appspot.com",
  messagingSenderId: "106397883516",
  appId: "1:106397883516:web:3b2d631be2ab87c9597df9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);