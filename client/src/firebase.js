// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merndeploy.firebaseapp.com",
  projectId: "merndeploy",
  storageBucket: "merndeploy.appspot.com",
  messagingSenderId: "418115115435",
  appId: "1:418115115435:web:a5d6b2eefb02a1d75d5aee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
