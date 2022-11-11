import { View, Text, Pressable } from 'react-native'
import React from 'react'
import homeScreenStyles from './HomeScreenStyles'

export default function HomeScreen({ navigation }) {


  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.mainTitle}>Only Knowledge</Text>
      <View style={homeScreenStyles.innerContainer}>
        <Pressable
          style={homeScreenStyles.pressable}>
          <Text
            style={homeScreenStyles.label}
            onPress={() => navigation.navigate('Find a tutor')}>Find a tutor</Text>
        </Pressable>
        <Pressable
          style={homeScreenStyles.pressable}
          onPress={() => navigation.navigate('Quick question')}>
          <Text style={homeScreenStyles.label}>Quick question</Text>
        </Pressable>
      </View>
    </View>
  )
}