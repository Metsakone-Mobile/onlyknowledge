import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileNavigator from './ProfileNavigator'
import MainNavigator from './MainNavigator'
import NotificationsNavigator from './NotificationsNavigator'
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
        }} component={MainNavigator} />

      <Tab.Screen name='NotificationsNavigator'
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" color={color} size={20} />
          ),
          headerShown: false,
          title: 'Notifications'
        }} component={NotificationsNavigator} />

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