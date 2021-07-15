import React, { ReactElement , useState, useEffect} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'


// Configure Firebase.
const config = {
  apiKey: "AIzaSyBxwQlDE8omqzejYDuo_ZmycEh8QQjM5GY",
  authDomain: "boilerplate-mern.firebaseapp.com",
  projectId: "boilerplate-mern",
  storageBucket: "boilerplate-mern.appspot.com",
  messagingSenderId: "111523193499",
  appId: "1:111523193499:web:684e369f7592b15e465c3e",
  measurementId: "G-BXFLXX6SB0"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
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

function Login(): ReactElement {


  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  let user = {displayName: "ñoco"}
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      user = user
      console.log(user)
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <div style={{border: "1px solid green"}}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {firebase.auth().currentUser?.displayName }! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default Login
