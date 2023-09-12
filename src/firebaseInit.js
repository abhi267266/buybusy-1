// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyTRQogQ3kvRYPSDkx-3FE03CtVpYZA20",
  authDomain: "buybusy-cf893.firebaseapp.com",
  projectId: "buybusy-cf893",
  storageBucket: "buybusy-cf893.appspot.com",
  messagingSenderId: "536714692324",
  appId: "1:536714692324:web:22847b01e2e97175e98ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
