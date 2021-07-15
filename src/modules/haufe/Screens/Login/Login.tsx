import React, { ReactElement } from 'react'

const firebase = require('firebase');
const firebaseui = require('firebaseui');

function Login(): ReactElement {

  let ui = new firebaseui.auth.AuthUI(firebase.auth())

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
}

export default Login
