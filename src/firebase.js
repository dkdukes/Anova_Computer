// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAh3YjxSIyX6LEJe-y_1dTQhQ58m_6z6U",
  authDomain: "anova-computer.firebaseapp.com",
  projectId: "anova-computer",
  storageBucket: "anova-computer.firebasestorage.app",
  messagingSenderId: "721452254720",
  appId: "1:721452254720:web:64a7deafc3e7de02bf3ae5",
  measurementId: "G-BHDGD275KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);