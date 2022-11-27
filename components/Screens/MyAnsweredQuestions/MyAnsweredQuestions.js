import { View, Text } from 'react-native'
import styles from './MyAnsweredQuestionsStyles'
import React, { useEffect, useState, useContext } from 'react'
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
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Your answered questions</Text>
           {openQuestions.map(question => (
            <View style={styles.questionCard} key={question.question_input}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{question.date}</Text>
                <Text style={{fontWeight: 'bold'}}>Question:</Text>
                <Text>{question.question_input}</Text>
                <Text style={{fontWeight: 'bold'}}>Answer:</Text>
                <Text>{question.answer}</Text>
                <Text>Answered by: {question.answeredBy}</Text>
            </View>
           ))}
        </View>
      )
  }
  
}