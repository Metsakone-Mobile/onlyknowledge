import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER  } from '../firebase/Config'
import { AuthContext } from '../context/AuthContext'
import Pickers from './Pickers'
import styles from '../Styles'


export default function MyProfile() {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')


  const getUserInfo = async() => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Profile</Text>
      <Text style={styles.label}>{name}</Text>
      <Pickers/>
    </View>
  )
}