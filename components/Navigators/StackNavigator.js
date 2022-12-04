import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import FindATutor from '../Screens/FindATutorScreen/FindATutor'
import QuickQuestionNavigator from './QuickQuestionNavigator'
import Tokens from '../Customs/TokenInfo'



export default function StackNavigator() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#ffdab8'},
          headerRight: () => (
            <Tokens />
          )      
        }}
        />
        <Stack.Screen name='Find a tutor' component={FindATutor} />
        <Stack.Screen name='Quick question navigator' component={QuickQuestionNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}