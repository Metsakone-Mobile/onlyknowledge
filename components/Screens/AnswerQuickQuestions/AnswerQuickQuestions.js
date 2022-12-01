import { View, Text, ScrollView, Pressable} from 'react-native'
import { useFocusEffect} from '@react-navigation/native'
import AnswerQuestionCard from '../../Customs/QuestionCards/AnswerQuestionCard'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
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
            questionId: doc.id,
            subjects: doc.data().subjects
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

  const goGiveAnswer = (question) => {
    navigation.navigate('Give answer', {q : question.question_input, qID : question.questionId})
  }
  if(isLoaded === false) {
    return <View><Text>Loading...</Text></View>
  } else {
    return (
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Title text="Only Knowledge" />
            <Heading text="Open questions" />
            {openQuestions.map(question => (
                <AnswerQuestionCard key={question.questionId} question={question} goGiveAnswer={() => goGiveAnswer(question)}/>
            ))}
        </View>
        </ScrollView> 
      )
  }
  
}