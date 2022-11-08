import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJhkYBvem-ww9Su8u8ti-HLC22jm-YDSo",
    authDomain: "okma-76ded.firebaseapp.com",
    projectId: "okma-76ded",
    storageBucket: "okma-76ded.appspot.com",
    messagingSenderId: "2116185361",
    appId: "1:2116185361:web:0593f8389ed12aef86f0b0"
  }

  initializeApp(firebaseConfig)

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  }