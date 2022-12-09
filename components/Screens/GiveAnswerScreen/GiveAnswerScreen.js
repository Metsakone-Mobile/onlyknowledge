import { View, Text, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import CustomButton from '../../Customs/Buttons/CustomButton'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import Label from '../../Customs/TextWrappers/Label'
import Circles from '../../Customs/Decoratives/Circles'
import { firestore, doc, updateDoc, USER, getDoc } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import styles from './GiveAnswerStyles'

export default function GiveAnswerScreen({ navigation, route}) {
  
  const { loggedUserID } = useContext(AuthContext)
  const [answer, setAnswer] = useState('')
  const [username, setUsername] = useState('')  
  const [tokens, setTokens] = useState(null)

  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setUsername(docSnap.data().username)
      setTokens(docSnap.data().tokens)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
    console.log(route.params?.qID)
  }, [])

  const submitAnswer = async() => {
    const questionToAnswerRef = doc(firestore, 'Questions', route.params?.qID)
    console.log(questionToAnswerRef)
    await updateDoc(questionToAnswerRef, {
        answer: answer,
        answered: true,
        answeredBy: username,
        answerDate: new Date().toLocaleDateString(),
        answerViewed: false
    })
    rewardTokens()
  }

  const rewardTokens = async() => {
    const userRef = doc(firestore, USER, loggedUserID)
    await updateDoc(userRef, {
      tokens: tokens + 3
    })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Circles />
      <ScrollView style={{flex: 1, width: '100%'}}>
        <Title text="Only Knowledge" />
        <Heading text="Spread your wisdom" />
        <Label text="The question:" sizeOfFont={28} />  
        <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{route.params?.q}</Text>
        </View>
        <Label text="The answer:" sizeOfFont={28} />
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
    </View>
  )
}