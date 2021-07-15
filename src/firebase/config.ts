import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBxwQlDE8omqzejYDuo_ZmycEh8QQjM5GY",
  authDomain: "boilerplate-mern.firebaseapp.com",
  projectId: "boilerplate-mern",
  storageBucket: "boilerplate-mern.appspot.com",
  messagingSenderId: "111523193499",
  appId: "1:111523193499:web:684e369f7592b15e465c3e",
  measurementId: "G-BXFLXX6SB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

