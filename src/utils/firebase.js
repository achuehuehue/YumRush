// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw1zEpUIWHllfkwGzIjBDMicwb2yJKwZc",
  authDomain: "yumrush-354b4.firebaseapp.com",
  projectId: "yumrush-354b4",
  storageBucket: "yumrush-354b4.appspot.com",
  messagingSenderId: "516551244548",
  appId: "1:516551244548:web:359cf2caa53b3609ddee51",
  measurementId: "G-P3LMFPPPDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();