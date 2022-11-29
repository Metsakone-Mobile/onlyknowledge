import { View, Text, Pressable } from 'react-native'
import React from 'react'
import homeScreenStyles from './HomeScreenStyles'
import CustomButton from '../../Customs/CustomButton'
import Title from '../../Customs/TextWrappers/Title'

export default function HomeScreen({ navigation }) {

  const goToFindATutor = () => {
    navigation.navigate('Find a tutor')
  }

  const goToQuickQuestion = () => {
    navigation.navigate('Quick question navigator')
  }
  return (
    <View style={homeScreenStyles.container}>
      <Title text="Only Knowledge" />
        <Pressable onPress={goToFindATutor} style={{margin: 40}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='Find a tutor' />}
        </Pressable>
        <Pressable onPress={goToQuickQuestion} style={{margin: 20}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='Quick question' />}
        </Pressable> 
    </View>
  )
}