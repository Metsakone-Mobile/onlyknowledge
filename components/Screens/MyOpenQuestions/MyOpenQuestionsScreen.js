import { View, Text, ScrollView } from 'react-native'
import styles from './MyOpenQuestionsStyles'
import React, { useEffect, useState, useContext } from 'react'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import MyOpenQuestionCard from '../../Customs/QuestionCards/MyOpenQuestionCard'
import Circles from '../../Customs/Decoratives/Circles'
import { AuthContext } from '../../../context/AuthContext'
import { firestore, collection, query, where, getDocs } from '../../../firebase/Config'

export default function MyOpenQuestionsScreen() {
    const { loggedUserID } = useContext(AuthContext)

    const [openQuestions, setOpenQuestions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

  const getOpenQuestions = async () => {
    const questionsRef = collection(firestore, 'Questions')
    const q = query(questionsRef, where("userId", '==', loggedUserID), where("answered", '==', false))
  
    const querySnapShot = await getDocs(q)
    let tempOpenQuestions = []
    querySnapShot.forEach((doc) => {
        const formedQuestion = {
          answered: doc.data().answered,
          name: doc.data().name,
          question_input: doc.data().question_input,
          userId: doc.data().userId,
          date: doc.data().date,
          questionId: doc.id,
          subjects: doc.data().subjects
        }
        tempOpenQuestions.push(formedQuestion)
    })
    setOpenQuestions(tempOpenQuestions)
    setIsLoaded(true)
    console.log(tempOpenQuestions)
  }  

  useEffect(() => {
    getOpenQuestions()
  }, [])

  if(isLoaded === false) {
    return <View><Text>Loading...</Text></View>
  } else {
    return (
      <View style={styles.container}>
        <Circles />
        <ScrollView style={{flex: 1, width: '100%'}} showsVerticalScrollIndicator={false}>
          <Title text="Only Knowledge" />
          <Heading text="My open questions" />
           {openQuestions.map(question => (
              <MyOpenQuestionCard key={question.questionId} question={question} />
           ))}

        </ScrollView> 
      </View> 
      )
  }
  
}