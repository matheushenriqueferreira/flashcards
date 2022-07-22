import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  /*

    Em breve farei um tutorial de como criar o seu 
    projeto no firebase para utilização dessa aplicação.

  */
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});