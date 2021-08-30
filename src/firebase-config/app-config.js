// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc-yWskrXml5jXIXhpF5jsZI3-gIDMFwg",
  authDomain: "bills-reminder-app-830c1.firebaseapp.com",
  projectId: "bills-reminder-app-830c1",
  storageBucket: "bills-reminder-app-830c1.appspot.com",
  messagingSenderId: "775440601697",
  appId: "1:775440601697:web:0029b37f6746bab5c01020",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

//
