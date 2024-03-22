// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4bc50.firebaseapp.com",
  projectId: "mern-blog-4bc50",
  storageBucket: "mern-blog-4bc50.appspot.com",
  messagingSenderId: "447530823438",
  appId: "1:447530823438:web:cb4034034616f6ec57315f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
