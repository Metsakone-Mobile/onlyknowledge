import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, setDoc, query, onSnapshot } from 'firebase/firestore'

//tänne configit

  initializeApp(firebaseConfig)
  const firestore = getFirestore()

  

  const USER = 'user'

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    firestore,
    collection,
    doc,
    addDoc,
    getDoc,
    setDoc,
    query,
    onSnapshot,
    USER
  }