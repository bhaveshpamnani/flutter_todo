// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHA5wlYpYfwxklUQX87liyzed16d9E-GQ",
  authDomain: "clone-9975f.firebaseapp.com",
  projectId: "clone-9975f",
  storageBucket: "clone-9975f.appspot.com",
  messagingSenderId: "905610343220",
  appId: "1:905610343220:web:c973adaa8b8ec5a8f6ab61",
  measurementId: "G-S413NNRWXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);