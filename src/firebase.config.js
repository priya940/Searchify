// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZjBgOkavRPHJeeIY-TmM6bV5hLVmYZOY",
  authDomain: "online-job-portal-cd8ac.firebaseapp.com",
  projectId: "online-job-portal-cd8ac",
  storageBucket: "online-job-portal-cd8ac.appspot.com",
  messagingSenderId: "212312339448",
  appId: "1:212312339448:web:76f36c8391a54984ce9c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};