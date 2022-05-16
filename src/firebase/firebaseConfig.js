// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2h8wSK8o-UbVLH0zNdQOKKh9Y2Nm2nIE",
    authDomain: "userdataauth.firebaseapp.com",
    projectId: "userdataauth",
    storageBucket: "userdataauth.appspot.com",
    messagingSenderId: "798560404712",
    appId: "1:798560404712:web:3f5b265d22bdd98083755d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firestore = getFirestore(app)

export {
    auth, createUserWithEmailAndPassword, signOut, 
    signInWithEmailAndPassword, firestore, setDoc, 
    doc, getDoc, updateDoc
}