import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAQi9w0HBszmZEMPQwD12HVPpKCpelHaSU",
    authDomain: "foodtopia-22128.firebaseapp.com",
    projectId: "foodtopia-22128",
    storageBucket: "foodtopia-22128.appspot.com",
    messagingSenderId: "355485151592",
    appId: "1:355485151592:web:fcf50b74d5057e0047a6dd",
    measurementId: "G-FKJW87PSWQ"
  };

const fireApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth, fireApp }