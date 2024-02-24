import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import firebase from 'firebase/app';
import 'firebase/firestore';

//app config
const firebaseConfig = {
  apiKey: "AIzaSyCME8N-EiRPgdeDTraTZaibfaLu-7XC_Ww",
  authDomain: "stack-8-dummy-database.firebaseapp.com",
  projectId: "stack-8-dummy-database",
  storageBucket: "stack-8-dummy-database.appspot.com",
  messagingSenderId: "969838220671",
  appId: "1:969838220671:web:450ea754ae1fd96b57b64a"
};

//initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);