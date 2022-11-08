import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../Styles'


export default function MyProfile() {

  const {loggedUser} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Profile</Text>
      <Text>User ID: {loggedUser.uid}</Text>
    </View>
  )
}