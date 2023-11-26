// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sudd-estate.firebaseapp.com",
  projectId: "sudd-estate",
  storageBucket: "sudd-estate.appspot.com",
  messagingSenderId: "605837431483",
  appId: "1:605837431483:web:7a0c4fd9b998fcdfa1cf9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);