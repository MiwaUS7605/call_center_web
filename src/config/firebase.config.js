// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "transportation-app-297c0.firebaseapp.com",
  databaseURL: "https://transportation-app-297c0-default-rtdb.firebaseio.com",
  projectId: "transportation-app-297c0",
  storageBucket: "transportation-app-297c0.appspot.com",
  messagingSenderId: "360310995863",
  appId: "1:360310995863:web:565640c02e2991882ae2d2",
  measurementId: "G-R68Y7KYBK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDb = getFirestore(app);
export const realtimeDb = getDatabase(app);