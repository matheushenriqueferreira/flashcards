import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiiPQVSNxGE3cPxIFrRfHNy0J_hPk8v8g",
  authDomain: "flashcardsproject-9fccc.firebaseapp.com",
  projectId: "flashcardsproject-9fccc",
  storageBucket: "flashcardsproject-9fccc.appspot.com",
  messagingSenderId: "108411268019",
  appId: "1:108411268019:web:43a61e4ed8d966047b39c6"
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});