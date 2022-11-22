import { View, Text } from 'react-native'
import styles from './MyOpenQuestionsStyles'
import React, { useEffect, useState, useContext } from 'react'
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
          <Text style={styles.mainTitle}>Your open questions</Text>
           {openQuestions.map(question => (
            <View style={styles.questionCard} key={question.question_input}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{question.date}</Text>
                <Text style={{fontWeight: 'bold'}}>Question:</Text>
                <Text>{question.question_input}</Text>
            </View>
           ))}
        </View>
      )
  }
  
}