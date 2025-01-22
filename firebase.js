// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfw59NL2tH68QZ0jJ0vC6tGsJAkGVA29g",
  authDomain: "porfolio-510fc.firebaseapp.com",
  projectId: "porfolio-510fc",
  storageBucket: "porfolio-510fc.firebasestorage.app",
  messagingSenderId: "26730762464",
  appId: "1:26730762464:web:94a886ef94205fd8a44085",
  measurementId: "G-RBXHTYTZ2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 