import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import FindATutor from '../Screens/FindATutorScreen/FindATutor'
import NewQuickQuestion from '../Screens/NewQuickQuestion/NewQuickQuestion'
import QuickQuestionMain from '../Screens/QuickQuestionMain/QuickQuestionMain'
import MyOpenQuestionsScreen from '../Screens/MyOpenQuestions/MyOpenQuestionsScreen'
import MyAnsweredQuestions from '../Screens/MyAnsweredQuestions/MyAnsweredQuestions'
import AnswerQuickQuestions from '../Screens/AnswerQuickQuestions/AnswerQuickQuestions'
import GiveAnswerScreen from '../Screens/GiveAnswerScreen/GiveAnswerScreen'
import Heading from '../Customs/TextWrappers/Heading'
import Tokens from '../Customs/TokenInfo'
import { AntDesign } from '@expo/vector-icons'



export default function MainNavigator({navigation}) {

  const Stack = createStackNavigator()

  const goBackToQuickQuestion = () => {
    navigation.navigate('Quick question')
  }

  const goBackHome = () => {
    navigation.goBack()
  }

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
        <Stack.Screen 
          name='Find a tutor' 
          component={FindATutor}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Find a tutor" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackHome} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
        />
        <Stack.Screen 
          name='Quick question' 
          component={QuickQuestionMain}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackHome} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
          />
        <Stack.Screen 
          name='My open questions' 
          component={MyOpenQuestionsScreen}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToQuickQuestion} />
            ),
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
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToQuickQuestion} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
          />
        <Stack.Screen 
          name='New quick question' 
          component={NewQuickQuestion}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToQuickQuestion} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
          />
        <Stack.Screen 
          name='Answer questions' 
          component={AnswerQuickQuestions}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToQuickQuestion} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
          />
        <Stack.Screen 
          name='Give answer' 
          component={GiveAnswerScreen}
          options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="Quick Question" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToQuickQuestion} />
            ),
            headerRight: () => (
              <Tokens />
            )    
          }}
          />
    </Stack.Navigator>
  )
}