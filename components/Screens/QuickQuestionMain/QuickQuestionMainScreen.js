import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import styles from './QuickQuestionMainStyles'
import CustomButton from '../../Customs/CustomButton'
import { AuthContext } from '../../../context/AuthContext'

export default function QuickQuestionMainScreen({navigation}) {

  const { isUserTutor } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Only Knowledge</Text>
      <Pressable style={{marginBottom: 20}} onPress={() => navigation.navigate('New quick question')}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'New question'} />}
      </Pressable>
      <Pressable style={{marginBottom: 20}} onPress={() => navigation.navigate('My open questions')}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'My open questions'} />}
      </Pressable>
      <Pressable style={{marginBottom: 20}} onPress={() => navigation.navigate('My answered questions')}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'My answered questions'} />}
      </Pressable>
      {
        isUserTutor &&
        <Pressable style={{marginBottom: 20}} onPress={() => navigation.navigate('Answer questions')}>
          {(state) => <CustomButton pressed={state.pressed} buttonText={'Answer questions'} />}
        </Pressable>
      }
    </View>
  )
}