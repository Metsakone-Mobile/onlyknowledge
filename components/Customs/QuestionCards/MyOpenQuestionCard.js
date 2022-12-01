import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyOpenQuestionCard({question}) {
  return (
    <View style={styles.questionCard}>
        <Text style={{fontWeight: 'bold', marginBottom: 5}}>{question.date}</Text>
        <Text style={{fontWeight: 'bold'}}>Question:</Text>
        <Text>{question.question_input}</Text>
        <Text style={{fontWeight: 'bold'}}>Subjects: </Text>
            {
            question.subjects.map((subject, i) => <Text key={i}>{subject}</Text>)
            }
    </View>
  )
}

const styles = StyleSheet.create({
    questionCard: {
        minHeight: 120,
        width: '80%',
        backgroundColor: '#f5f2eb',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        marginBottom: 10,
        marginTop: 20
    },
})