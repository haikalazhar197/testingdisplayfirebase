import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import 'firebase/database';

// var firebase = require("firebase/app");
// var firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyBQFX4TZpao-74mLFmw0SPtl6hcNhZzjW0",
    authDomain: "automated-payment-system.firebaseapp.com",
    databaseURL: "https://automated-payment-system.firebaseio.com",
    projectId: "automated-payment-system",
    storageBucket: "automated-payment-system.appspot.com",
    messagingSenderId: "48747123659",
    appId: "1:48747123659:web:a9a3e04ee440fad9fcdc4e",
    measurementId: "G-0RV89MXC9M"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
// export const db = app.database();
export default app;