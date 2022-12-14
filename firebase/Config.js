import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, doc, addDoc, getDoc, setDoc, query, onSnapshot, database, where, getDocs, updateDoc, orderBy } from 'firebase/firestore'
const firebaseConfig = {

  
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
    setDoc,
    query,
    onSnapshot,
    USER,
    QUESTIONS,
    SUBJECTS,
    where,
    getDocs,
    updateDoc,
    orderBy,
    signOut
  }
