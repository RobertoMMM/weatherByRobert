// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const firestore = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  firestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  googleProvider,
  signInWithPopup,
  onAuthStateChanged,
};
