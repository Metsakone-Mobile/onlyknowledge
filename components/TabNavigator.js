import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackNavigator from './StackNavigator'
import MyProfile from './MyProfile'
import Notifications from './Notifications'

export default function TabNavigator() {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
        <Tab.Screen name='Main' component={StackNavigator} options={{headerShown: false}} />
        <Tab.Screen name='Notifications' component={Notifications} />
        <Tab.Screen name='My Profile' component={MyProfile} />
    </Tab.Navigator>
  )
}