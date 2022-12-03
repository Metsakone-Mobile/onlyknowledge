import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyClosedQuestionCard({question}) {
  return (
    <View style={styles.questionCard} key={question.question_input}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{question.date}</Text>
                <Text style={{fontWeight: 'bold'}}>Question:</Text>
                <Text>{question.question_input}</Text>
                <Text style={{fontWeight: 'bold'}}>Answer:</Text>
                <Text>{question.answer}</Text>
                <Text>Answered by: {question.answeredBy}</Text>
            </View>
  )
}

const styles = StyleSheet.create({
    questionCard: {
        minHeight: 120,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#f5f2eb',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 10,
        marginTop: 20
    },
})