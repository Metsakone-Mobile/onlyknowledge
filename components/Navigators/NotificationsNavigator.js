import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Notifications from '../../components/Screens/NotificationScreen/Notifications'
import MyAnsweredQuestions from '../Screens/MyAnsweredQuestions/MyAnsweredQuestions'
import Heading from '../Customs/TextWrappers/Heading'
import { AntDesign } from '@expo/vector-icons';
import Tokens from '../Customs/TokenInfo'



export default function StackNavigator({navigation}) {

  const Stack = createStackNavigator()

  const goBackToNotifications = () => {
    navigation.navigate('Notifications')
  }

  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Notifications' 
        component={Notifications}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: '#ffdab8'},
          headerRight: () => (
            <Tokens />
          )      
        }}
        />
        <Stack.Screen 
          name='My answered questions' 
          component={MyAnsweredQuestions}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToNotifications} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
          />
    </Stack.Navigator>
  )
}