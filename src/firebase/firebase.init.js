// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcSJvFvUVLDX85zNiBQfiADujhfDdPevo",
  authDomain: "test-5c886.firebaseapp.com",
  projectId: "test-5c886",
  storageBucket: "test-5c886.firebasestorage.app",
  messagingSenderId: "711969658340",
  appId: "1:711969658340:web:4c119dcd4a9c9ad977a3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);