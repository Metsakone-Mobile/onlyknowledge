import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function QuickQuestion() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Quick Question</Text>
        <View style={styles.innerContainer}>
            <Text style={styles.label}>State your question</Text>
            <TextInput 
             style={styles.questionBox} 
             placeholder='Start typing...'
             multiline={true}
             numberOfLines={30}/>
        </View>
    </View>
  )
}