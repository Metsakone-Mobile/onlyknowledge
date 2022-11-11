import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import FindATutor from '../Screens/FindATutorScreen/FindATutor'
import QuickQuestion from '../Screens/QuickQuestionScreen/QuickQuestion'

export default function StackNavigator() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Find a tutor' component={FindATutor} />
        <Stack.Screen name='Quick question' component={QuickQuestion} />
    </Stack.Navigator>
  )
}