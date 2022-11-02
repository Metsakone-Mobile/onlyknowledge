import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import FindATutor from './FindATutor'
import QuickQuestion from './QuickQuestion'

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