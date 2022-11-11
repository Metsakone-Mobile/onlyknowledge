import { View, Text, TextInput } from 'react-native'
import React from 'react'
import quickQuestionStyles from './QuickQuestionStyles'

export default function QuickQuestion() {
  return (
    <View style={quickQuestionStyles.container}>
      <Text style={quickQuestionStyles.mainTitle}>Quick Question</Text>
        <View style={quickQuestionStyles.innerContainer}>
            <Text style={quickQuestionStyles.label}>State your question</Text>
            <TextInput 
             style={quickQuestionStyles.questionBox} 
             placeholder='Start typing...'
             multiline={true}
             numberOfLines={30}/>
        </View>
    </View>
  )
}