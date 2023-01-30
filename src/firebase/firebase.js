import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Insira aqui a configuração do projeto do Firebase
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});