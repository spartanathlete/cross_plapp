// Import the functions you need from the SDKs you need

// import * as firebase from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ8_dFjWkQXerFKuhKZbo2Pwgzl9CyDx4",
  authDomain: "fir-auth-dfa99.firebaseapp.com",
  projectId: "fir-auth-dfa99",
  storageBucket: "fir-auth-dfa99.appspot.com",
  messagingSenderId: "623826928442",
  appId: "1:623826928442:web:1246a912100c10991d0603"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export { auth };