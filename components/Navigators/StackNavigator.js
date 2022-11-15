import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import EditProfile from '../Screens/EditProfileScreen/EditProfile'
import FindATutor from '../Screens/FindATutorScreen/FindATutor'
import QuickQuestion from '../Screens/QuickQuestionScreen/QuickQuestion'



export default function StackNavigator() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Find a tutor' component={FindATutor} />
        <Stack.Screen name='Quick question' component={QuickQuestion} />
        <Stack.Screen name='Edit Profile' component={EditProfile}/>
    </Stack.Navigator>
  )
}