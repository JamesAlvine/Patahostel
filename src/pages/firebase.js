// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGwj4i0NcsQybcNO04C4NQxxy8ZixuJS8",
  authDomain: "pata-hostel-b2eee.firebaseapp.com",
  projectId: "pata-hostel-b2eee",
  storageBucket: "pata-hostel-b2eee.appspot.com",
  messagingSenderId: "640571221755",
  appId: "1:640571221755:web:b9c01c84e9a5c855d0325e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()