// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUIeudvKGoaxFgMUqR8JZvR7lYR_JgvAY",
  authDomain: "netflix-gpt-6e911.firebaseapp.com",
  projectId: "netflix-gpt-6e911",
  storageBucket: "netflix-gpt-6e911.appspot.com",
  messagingSenderId: "443317090161",
  appId: "1:443317090161:web:e46ab97dee8254be9f28d0",
  measurementId: "G-HHHWPGK43L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth= getAuth();