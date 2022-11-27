import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewQuickQuestion from '../Screens/NewQuickQuestion/NewQuickQuestion'
import QuickQuestionMainScreen from '../Screens/QuickQuestionMain/QuickQuestionMainScreen'
import MyOpenQuestionsScreen from '../Screens/MyOpenQuestions/MyOpenQuestionsScreen'
import MyAnsweredQuestions from '../Screens/MyAnsweredQuestions/MyAnsweredQuestions'
import AnswerQuickQuestions from '../Screens/AnswerQuickQuestions/AnswerQuickQuestions'
import GiveAnswerScreen from '../Screens/GiveAnswerScreen/GiveAnswerScreen'



export default function StackNavigator() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Quick question' component={QuickQuestionMainScreen} />
        <Stack.Screen name='My open questions' component={MyOpenQuestionsScreen} />
        <Stack.Screen name='My answered questions' component={MyAnsweredQuestions} />
        <Stack.Screen name='New quick question' component={NewQuickQuestion} />
        <Stack.Screen name='Answer questions' component={AnswerQuickQuestions} />
        <Stack.Screen name='Give answer' component={GiveAnswerScreen} />
    </Stack.Navigator>
  )
}