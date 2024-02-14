// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAvnqzzJLyoIPNPTD__A5tYXXzpRyXYWY",
  authDomain: "treasurejeffy-portfolio.firebaseapp.com",
  projectId: "treasurejeffy-portfolio",
  storageBucket: "treasurejeffy-portfolio.appspot.com",
  messagingSenderId: "481646593374",
  appId: "1:481646593374:web:24aeb0499aa080d9457bcf",
  measurementId: "G-K35XZRB8Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)