// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlQ92tAYplVkIFZ71CwwujSySLYTZpeAw",
  authDomain: "qrmory-3cd6d.firebaseapp.com",
  projectId: "qrmory-3cd6d",
  storageBucket: "qrmory-3cd6d.appspot.com",
  messagingSenderId: "506667463066",
  appId: "1:506667463066:web:dc7e2dd931fc2345e94a23",
  measurementId: "G-9Q625BXSZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
