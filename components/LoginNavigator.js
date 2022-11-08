import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from './FirstScreen'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'

export default function LoginNavigator() {

  const Stack = createStackNavigator()  

  return (
    <Stack.Navigator>
        <Stack.Screen name='First' component={FirstScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}