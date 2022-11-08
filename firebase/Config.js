import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

// Add firebase configurations here

  initializeApp(firebaseConfig)

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  }