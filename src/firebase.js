import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCHDX24-tVklqsGGl0bwgNZwyuKu7cFZy4",
    authDomain: "ginder-a5da4.firebaseapp.com",
    projectId: "ginder-a5da4",
    storageBucket: "ginder-a5da4.appspot.com",
    messagingSenderId: "386028702443",
    appId: "1:386028702443:web:c5985e719a72d6c2834cae",
    measurementId: "G-VQWTXD067H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database =firebaseApp.firestore();

  export default database;