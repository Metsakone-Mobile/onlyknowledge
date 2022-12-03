import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import FindATutor from '../Screens/FindATutorScreen/FindATutor'
import QuickQuestionNavigator from './QuickQuestionNavigator'




export default function StackNavigator() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Find a tutor' component={FindATutor} />
        <Stack.Screen name='Quick question navigator' component={QuickQuestionNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}