// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl1LBomjZuRmE3xdroRECCupUjdgiqGGg",
  authDomain: "prepwise-7f8fe.firebaseapp.com",
  projectId: "prepwise-7f8fe",
  storageBucket: "prepwise-7f8fe.firebasestorage.app",
  messagingSenderId: "640938095177",
  appId: "1:640938095177:web:40c87d008171fad2234598",
  measurementId: "G-NENZRVEW65"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);