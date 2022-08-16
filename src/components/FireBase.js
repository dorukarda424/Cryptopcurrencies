import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHYfhoJAuao_HD3h_FCAv-QJSfRND7yrE",
    authDomain: "cryprocurrencies-d5818.firebaseapp.com",
    projectId: "cryprocurrencies-d5818",
    storageBucket: "cryprocurrencies-d5818.appspot.com",
    messagingSenderId: "700233944067",
    appId: "1:700233944067:web:c64f9754398218b6d49236",
    measurementId: "G-HCR3C8DCT3"
  };

  const app=initializeApp(firebaseConfig);

  export const auth=getAuth(app);

  export const db=getFirestore(app);

 

 