import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});