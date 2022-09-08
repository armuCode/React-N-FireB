import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9FCGgxSD5_GmgnTofv0DY01q051uKBk",
  authDomain: "react-n-firebase-c649d.firebaseapp.com",
  projectId: "react-n-firebase-c649d",
  storageBucket: "react-n-firebase-c649d.appspot.com",
  messagingSenderId: "571986668087",
  appId: "1:571986668087:web:54c8fad7b135db69deedb2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
