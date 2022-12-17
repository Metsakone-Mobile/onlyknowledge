import { View, Text, StyleSheet, Pressable } from 'react-native'
import CustomButton2 from '../Buttons/CustomButton2'
import React from 'react'


export default function AnswerQuestionCard({question, goGiveAnswer}) {
  return (
    <View style={styles.questionCard}>
        <Text style={styles.questionText}>Asked by: {question.name}</Text>
        <Text style={styles.questionText}>Asked on: {question.date}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Subjects:</Text>
        {
            question.subjects.map((subject, i) => <Text key={i}>{subject}</Text>)
        }
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Question:</Text>
        <Text style={{fontSize: 18}}>{question.question_input}</Text>
        <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={goGiveAnswer}>
            {(state) =>  <CustomButton2 pressed={state.pressed} buttonText='I know this' color='#32d106' /> }
        </Pressable>
        </View>
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
        paddingRight: 20,
        paddingTop: 5,
        marginBottom: 10,
        marginTop: 20
    },
    questionText: {
        fontSize: 12
    },
    
})