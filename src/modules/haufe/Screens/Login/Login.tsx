import React, { ReactElement , useState, useEffect} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, {uiConfig} from '../../../../firebase/config'

import { useAppDispatch } from '../../../../hooks/hooks'
import  { registerUser } from '../../../../redux/slices/userSlice'

function Login(): ReactElement {

  const dispatch = useAppDispatch()

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      dispatch(registerUser(user?.displayName || ""))
      console.log(user)
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);

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
