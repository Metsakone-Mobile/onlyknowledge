import { View, Text, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import CustomButton from '../../Customs/CustomButton'
import { firestore, doc, updateDoc, USER, getDoc } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import styles from './GiveAnswerStyles'

export default function GiveAnswerScreen({ navigation, route}) {
  
  const { loggedUserID } = useContext(AuthContext)
  const [answer, setAnswer] = useState('')
  const [username, setUsername] = useState('')  

  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setUsername(docSnap.data().username)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const submitAnswer = async() => {
    const questionToAnswerRef = doc(firestore, 'Questions', route.params?.qID)
    await updateDoc(questionToAnswerRef, {
        answer: answer,
        answered: true,
        answeredBy: username
    })
    navigation.navigate('Answer questions')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Spread your wisdom</Text>
      <Text style={styles.label}>The question</Text>  
      <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{route.params?.q}</Text>
      </View>
      <Text style={styles.label}>The Answer</Text>
      <TextInput style={styles.inputField}
        placeholder='The answer is...'
        multiline={true}
        value={answer}
        onChangeText={text => setAnswer(text)}
      />
      <Pressable onPress={submitAnswer}>
        {(state) => <CustomButton pressed={state.pressed} buttonText='Submit answer' />}
      </Pressable>
    </ScrollView>
  )
}