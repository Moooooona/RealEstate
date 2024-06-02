// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamhome-estate.firebaseapp.com",
  projectId: "dreamhome-estate",
  storageBucket: "dreamhome-estate.appspot.com",
  messagingSenderId: "36397756620",
  appId: "1:36397756620:web:c4383a5408b4fc851e1269"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);