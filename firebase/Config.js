import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, query, onSnapshot, database, where } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNxbPczkUpQM2mUTu0Kno7eyo48qNv6-c",
  authDomain: "onlyknowledge-e6966.firebaseapp.com",
  projectId: "onlyknowledge-e6966",
  storageBucket: "onlyknowledge-e6966.appspot.com",
  messagingSenderId: "781353024788",
  appId: "1:781353024788:web:312c49d154551b8e321601"
}


  initializeApp(firebaseConfig)
  const firestore = getFirestore()

  const USER = 'user'
  const QUESTIONS = 'Questions'
  const SUBJECTS = 'subjects'

  export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    firestore,
    database,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    setDoc,
    query,
    onSnapshot,
    USER,
    QUESTIONS,
    SUBJECTS,
    where
  }
