import React, { ReactElement, useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../../../../firebase/config'

import { useAppDispatch } from '../../../../hooks/hooks'
import { registerUser } from '../../../../redux/slices/userSlice'

import './Login.css'
import ListView from '../ListView/ListView';


function Login(): ReactElement {

  const dispatch = useAppDispatch()

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      dispatch(registerUser({ displayName: (user?.displayName || ""), uid: (user?.uid || "") }))
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);

  const handleLogOut = async () => {
    await firebase.auth().signOut()
    dispatch(registerUser({displayName: "", uid: ""}))
  }


  if (!isSignedIn) {
    return (
      <div className="login-container">
        <p>Please sign-in:</p>
        <div style={{ border: "1px solid green" }}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <p>Welcome {firebase.auth().currentUser?.displayName}! You are now signed-in!</p>
      <button className="logout" onClick={handleLogOut}>Sign-out</button>
      <ListView />
    </div>
  );
}

export default Login
