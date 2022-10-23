// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4-m2i34jYdSxdQeKnro7_8Ya8X43pTA",
  authDomain: "r-email-password-auth.firebaseapp.com",
  projectId: "r-email-password-auth",
  storageBucket: "r-email-password-auth.appspot.com",
  messagingSenderId: "57815816687",
  appId: "1:57815816687:web:58d3222f9eb26248a8be1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;