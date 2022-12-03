import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewQuickQuestion from '../Screens/NewQuickQuestion/NewQuickQuestion'
import QuickQuestionMainScreen from '../Screens/QuickQuestionMain/QuickQuestionMainScreen'
import MyOpenQuestionsScreen from '../Screens/MyOpenQuestions/MyOpenQuestionsScreen'
import MyAnsweredQuestions from '../Screens/MyAnsweredQuestions/MyAnsweredQuestions'
import AnswerQuickQuestions from '../Screens/AnswerQuickQuestions/AnswerQuickQuestions'
import GiveAnswerScreen from '../Screens/GiveAnswerScreen/GiveAnswerScreen'
import Heading from '../Customs/TextWrappers/Heading'
import { AntDesign } from '@expo/vector-icons'



export default function StackNavigator({navigation}) {

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
          name='Quick question' 
          component={QuickQuestionMainScreen}
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
            )      
          }}
          />
    </Stack.Navigator>
  )
}