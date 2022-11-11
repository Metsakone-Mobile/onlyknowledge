import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { findATutorStyles } from './FindATurtorStyles'

export default function FindATutor() {
  return (
    <View style={findATutorStyles.container}>
      <Text style={findATutorStyles.ainTitle}>Find a tutor</Text>
        <Text style={findATutorStyles.label}>Search</Text>
        <TextInput style={findATutorStyles.searchBar} placeholder='Start typing...'/>
    </View>
  )
}