import { View, Text, ScrollView } from 'react-native'
import styles from './MyAnsweredQuestionsStyles'
import React, { useEffect, useState, useContext } from 'react'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import MyClosedQuestionCard from '../../Customs/QuestionCards/MyClosedQuestionCard'
import { AuthContext } from '../../../context/AuthContext'
import { firestore, collection, query, where, getDocs } from '../../../firebase/Config'

export default function MyOpenQuestionsScreen() {
    const { loggedUserID } = useContext(AuthContext)

    const [openQuestions, setOpenQuestions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

  const getOpenQuestions = async () => {
    const questionsRef = collection(firestore, 'Questions')
    const q = query(questionsRef, where("userId", '==', loggedUserID), where("answered", '==', true))
  
    const querySnapShot = await getDocs(q)
    let tempAnsweredQuestions = []
    querySnapShot.forEach((doc) => {
        const formedQuestion = {
          answered: doc.data().answered,
          answer: doc.data().answer,
          answeredBy: doc.data().answeredBy,
          name: doc.data().name,
          question_input: doc.data().question_input,
          userId: doc.data().userId,
          questionId: doc.id
        }
        tempAnsweredQuestions.push(formedQuestion)
    })
    setOpenQuestions(tempAnsweredQuestions)
    setIsLoaded(true)
    console.log(tempAnsweredQuestions)
  }  

  useEffect(() => {
    getOpenQuestions()
  }, [])

  if(isLoaded === false) {
    return <View><Text>Loading...</Text></View>
  } else {
    return (
      <ScrollView style={{backgroundColor: '#e5e5e5'}}>
        <View style={styles.container}>
          <Title text="Only Knowledge" />
          <Heading text="My closed questions" />
           {openQuestions.map(question => (
              <MyClosedQuestionCard key={question.question_input} question={question} />
           ))}
        </View>
      </ScrollView> 
      )
  }
}