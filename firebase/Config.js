import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'



  initializeApp(firebaseConfig)

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  }