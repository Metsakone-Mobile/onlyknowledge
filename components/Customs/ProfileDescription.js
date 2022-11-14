import { View, Text, TextInput } from 'react-native'
import React from 'react'
import profileDescriptionStyles from './ProfileDescriptionStyles'

export default function ProfileDescription({setProfileDescription}) {
  return (
    <View style={profileDescriptionStyles.container}>
      <Text style={profileDescriptionStyles.label}>About me</Text>  
      <TextInput
          style={profileDescriptionStyles.descriptionField}
          placeholder='I am...'
          multiline={true}
          numberOfLines={30}
          onChangeText={text => setProfileDescription(text)}
          />
    </View>
  )
}