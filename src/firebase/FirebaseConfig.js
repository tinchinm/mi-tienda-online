import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQrhLvpe7M8CqCLlGDJkqy8GBe822KakE",
  authDomain: "fixit-store.firebaseapp.com",
  projectId: "fixit-store",
  storageBucket: "fixit-store.appspot.com",
  messagingSenderId: "78376195520",
  appId: "1:78376195520:web:d095afc109c1d39a612425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);