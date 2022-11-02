import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function FindATutor() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Find a tutor</Text>
        <Text style={styles.label}>Search</Text>
        <TextInput style={styles.searchBar} placeholder='Start typing...'/>
    </View>
  )
}