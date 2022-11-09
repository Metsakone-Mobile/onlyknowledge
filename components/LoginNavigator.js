import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from './FirstScreen'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'


// LoginNavigator is a stack navigator used to navigate between the applications first screen, login and signup screens.
// LoginNavigator is the first component to be rendered by App.js when the app is first launched.

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