import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBxwQlDE8omqzejYDuo_ZmycEh8QQjM5GY",
  authDomain: "boilerplate-mern.firebaseapp.com",
  projectId: "boilerplate-mern",
  storageBucket: "boilerplate-mern.appspot.com",
  messagingSenderId: "111523193499",
  appId: "1:111523193499:web:684e369f7592b15e465c3e",
  measurementId: "G-BXFLXX6SB0"
};


export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase