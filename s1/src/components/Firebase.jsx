// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClD5WLVSq4sLcaHdUEWYOZfa2bv5VaxlE",
  authDomain: "campus-rentals.firebaseapp.com",
  projectId: "campus-rentals",
  storageBucket: "campus-rentals.appspot.com",
  messagingSenderId: "444219489688",
  appId: "1:444219489688:web:d640d6c88926024267bfed",
  measurementId: "G-QRB0JD6G80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);