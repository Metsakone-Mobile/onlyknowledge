import { View, Text, ScrollView, Pressable} from 'react-native'
import { useFocusEffect} from '@react-navigation/native'
import CustomButton2 from '../../Customs/CustomButton2'
import styles from './AnswerQuickQuestionStyles'
import React, { useCallback, useState } from 'react'
import { firestore, collection, query, where, getDocs } from '../../../firebase/Config'

export default function MyOpenQuestionsScreen({navigation}) {

    const [openQuestions, setOpenQuestions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

  const getOpenQuestions = async () => {
    const questionsRef = collection(firestore, 'Questions')
    const q = query(questionsRef,  where("answered", '==', false))
    
    const querySnapShot = await getDocs(q)
    let tempOpenQuestions = []
    querySnapShot.forEach((doc) => {
        const formedQuestion = {
            answered: doc.data().answered,
            date: doc.data().date,
            name: doc.data().name,
            question_input: doc.data().question_input,
            userId: doc.data().userId,
            questionId: doc.id
          }
        tempOpenQuestions.push(formedQuestion)
    })
    setOpenQuestions(tempOpenQuestions)
    setIsLoaded(true)
    console.log("Open questions: ", tempOpenQuestions)
  }  

  useFocusEffect(
    useCallback(() => {
      getOpenQuestions()
    }, [])
  )

  if(isLoaded === false) {
    return <View><Text>Loading...</Text></View>
  } else {
    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <Text style={styles.mainTitle}>Open questions</Text>
            {openQuestions.map(question => (
                <View style={styles.questionCard} key={question.question_input}>
                    <Text style={styles.questionText}>Asked by: {question.name}</Text>
                    <Text style={styles.questionText}>Asked on: {question.date}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Question:</Text>
                    <Text style={{fontSize: 18}}>{question.question_input}</Text>
                    <View style={{flex: 1, alignItems: 'center'}}>
                    <Pressable onPress={() => navigation.navigate('Give answer', {q : question.question_input, qID : question.questionId})}>
                        {(state) =>  <CustomButton2 pressed={state.pressed} buttonText='I know this' /> }
                    </Pressable>
                    </View>
                </View>
            ))}
            </ScrollView>
        </View>
      )
  }
  
}