import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});