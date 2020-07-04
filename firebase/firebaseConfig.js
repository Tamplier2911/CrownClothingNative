// core
import * as firebase from "firebase";

// services
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

// config
const firebaseConfig = {
  apiKey: "AIzaSyB96wchOE3xgS3_EdyfEMDwdvFWcxLQDRw",
  authDomain: "crown-clothing-native-db.firebaseapp.com",
  databaseURL: "https://crown-clothing-native-db.firebaseio.com",
  projectId: "crown-clothing-native-db",
  storageBucket: "crown-clothing-native-db.appspot.com",
  messagingSenderId: "1037363276487",
  appId: "1:1037363276487:web:b1872f9fe9f7e96c636ce2",
  measurementId: "G-JCB2RF7PRV",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();

export default firebase;
