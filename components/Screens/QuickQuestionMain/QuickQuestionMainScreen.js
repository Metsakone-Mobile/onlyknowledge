import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import styles from './QuickQuestionMainStyles'
import CustomButton from '../../Customs/Buttons/CustomButton'
import Title from '../../Customs/TextWrappers/Title'
import Circles from '../../Customs/Decoratives/Circles'
import { AuthContext } from '../../../context/AuthContext'



export default function QuickQuestionMainScreen({navigation}) {

  const { isUserTutor } = useContext(AuthContext)

  const goToNewQuestion = () => {
    navigation.navigate('New quick question')
  }
  
  const goToMyOpenQuestions = () => {
    navigation.navigate('My open questions')
  }

  const goToMyAnsweredQuestions = () => {
    navigation.navigate('My answered questions')
  }

  const goToAnswerQuestions = () => {
    navigation.navigate('Answer questions')
  }


  return (
    <View style={styles.container}>
      <Circles />
      <Title text="Only Knowledge" />
      <View style={{flex: 1, marginTop: 40}}>
      <Pressable style={{margin: 20}} onPress={goToNewQuestion}>
        {(state) => <CustomButton pressed={state.pressed} buttonText='New question' />}
      </Pressable>
      <Pressable style={{margin: 20}} onPress={goToMyOpenQuestions}>
        {(state) => <CustomButton pressed={state.pressed} buttonText='My open questions' />}
      </Pressable>
      <Pressable style={{margin: 20}} onPress={goToMyAnsweredQuestions}>
        {(state) => <CustomButton pressed={state.pressed} buttonText='My closed questions' />}
      </Pressable>
      {
        isUserTutor &&
        <Pressable style={{margin: 20}} onPress={goToAnswerQuestions}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='Answer questions' />}
        </Pressable>
      }
      </View>
    </View>
  )
}