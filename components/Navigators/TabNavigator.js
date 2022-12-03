import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileNavigator from './ProfileNavigator'
import StackNavigator from './StackNavigator'
import MyProfile from '../Screens/MyProfileScreen/MyProfile'
import Notifications from '../Screens/NotificationScreen/Notifications'
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function TabNavigator() {

  const Tab = createBottomTabNavigator()


  return (

    <Tab.Navigator>
      <Tab.Screen
        name='Main'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
          headerShown: false,
          title: 'Home'
        }} component={StackNavigator} />

      <Tab.Screen name='Notifications'
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" color={color} size={20} />
          ),
        }} component={Notifications} />

      <Tab.Screen name='My Profile'
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={20} />
          ),
          headerShown: false
        }} component={ProfileNavigator} />
    </Tab.Navigator>
  )
}