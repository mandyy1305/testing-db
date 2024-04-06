// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIxy7EXb1iPnn3KB9Wsmm9RpYYYEq0i4",
  authDomain: "zeroanonymity-2c311.firebaseapp.com",
  projectId: "zeroanonymity-2c311",
  storageBucket: "zeroanonymity-2c311.appspot.com",
  messagingSenderId: "416761483961",
  appId: "1:416761483961:web:8745126fec51e62f2e8168",
  measurementId: "G-4H5NF0TBBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
