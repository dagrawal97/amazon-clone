// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBol5SuXtcWyuzAmlJS0Q5KdvcBKPeMjm4",
    authDomain: "clone-4ed77.firebaseapp.com",
    projectId: "clone-4ed77",
    storageBucket: "clone-4ed77.appspot.com",
    messagingSenderId: "1053049048677",
    appId: "1:1053049048677:web:a0801cfccf979fff2a808c",
    measurementId: "G-RH4YQ4BQW4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  
