// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhTEQyuBCnc9HRCLkJ1P9YtRBLvpTNJaM",
  authDomain: "websit-b3f70.firebaseapp.com",
  databaseURL: "https://websit-b3f70-default-rtdb.firebaseio.com",
  projectId: "websit-b3f70",
  storageBucket: "websit-b3f70.appspot.com",
  messagingSenderId: "664415195650",
  appId: "1:664415195650:web:95d7abc09adb3d751c4d1b",
  measurementId: "G-5PHE3CRWN3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };