// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkhm7rWs6ewgitRSHxLe_uzZd0zklbBxw",
  authDomain: "clean-city-8d1a3.firebaseapp.com",
  projectId: "clean-city-8d1a3",
  storageBucket: "clean-city-8d1a3.appspot.com",
  messagingSenderId: "895588744091",
  appId: "1:895588744091:web:d4793ba474c6155f723f3e",
  measurementId: "G-NWV18E6KM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
