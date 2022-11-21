import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './QuickQuestionMainStyles'
import CustomButton from '../../Customs/CustomButton'

export default function QuickQuestionMainScreen({navigation}) {
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
    </View>
  )
}