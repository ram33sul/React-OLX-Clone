import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDCSbns75b6SIJTG1zNIE6praIJRzjqb_E",
    authDomain: "react-olx-clone-7c8fd.firebaseapp.com",
    projectId: "react-olx-clone-7c8fd",
    storageBucket: "react-olx-clone-7c8fd.appspot.com",
    messagingSenderId: "1055628215044",
    appId: "1:1055628215044:web:79f11b22adfb15561a0651",
    measurementId: "G-8Y504DMP7V"
  };

export const Firebase = firebase.initializeApp(firebaseConfig);