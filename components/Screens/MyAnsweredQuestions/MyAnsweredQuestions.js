import { View, Text, ScrollView } from 'react-native'
import styles from './MyAnsweredQuestionsStyles'
import React, { useEffect, useState, useContext } from 'react'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import Circles from '../../Customs/Decoratives/Circles'
import MyClosedQuestionCard from '../../Customs/QuestionCards/MyClosedQuestionCard'
import { AuthContext } from '../../../context/AuthContext'
import { firestore, collection, query, where, getDocs } from '../../../firebase/Config'

export default function MyAnsweredQuestions({route}) {
    const { loggedUserID } = useContext(AuthContext)
    const [focusedQuestion, setFocusedQuestion] = useState('')
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
          questionId: doc.id,
          date: doc.data().date
        }
        tempAnsweredQuestions.push(formedQuestion)
    })
    setOpenQuestions(tempAnsweredQuestions)
    setIsLoaded(true)
    console.log(tempAnsweredQuestions)
  }  

  useEffect(() => {
    getOpenQuestions()
    if(route.params?.fromNotifications){
      setFocusedQuestion(route.params?.fromNotifications)
      console.log("QID", route.params?.fromNotifications)
    }
  }, [])

  if(isLoaded === false) {
    return <View><Text>Loading...</Text></View>
  } else {
    return (
      <View style={styles.container}>
        <Circles />
        <ScrollView style={{flex: 1, width: '100%'}} showsVerticalScrollIndicator={false}>
            <Title text="Only Knowledge" />
            <Heading text="My closed questions" />
            {openQuestions.map(question => (
                <MyClosedQuestionCard 
                key={question.questionId} 
                question={question}
                isFocused={question.questionId === focusedQuestion ? true : false} />
            ))}
        </ScrollView> 
      </View>
      )
  }
}