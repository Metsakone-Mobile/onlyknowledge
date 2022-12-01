import { View, Text, TextInput, Pressable, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, setDoc, addDoc, doc, getDoc, QUESTIONS, USER, collection, updateDoc } from '../../../firebase/Config'
import quickQuestionStyles from './NewQuickQuestionStyles'
import { AuthContext } from '../../../context/AuthContext'
import CustomButton from '../../Customs/Buttons/CustomButton'
import SubjectChoicePanel from '../../Customs/SubjectChoicePanel'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import Label from '../../Customs/TextWrappers/Label'


export default function NewQuickQuestion({navigation}) {
  const [question_input, setQuestion_Input] = useState('');
  const [subjects, setSubjects] = useState([])
  const [name, setName] = useState('');
  const [tokens, setTokens] = useState(null)
  const { loggedUserID } = useContext(AuthContext)



  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
      setTokens(docSnap.data().tokens)
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])



 const saveQuestion= async () => {
    if(tokens < 5){
      alert("Not enough tokens. Lol.")
      return
    }
    const docRef = addDoc(collection(firestore, "Questions"), {
      question_input: question_input,
      name: name,
      userId: loggedUserID,
      answered: false,
      subjects: subjects,
      date: new Date().toLocaleDateString()
    });
    deductTokens()
    }

  const deductTokens = async() => {
    const userRef = doc(firestore, USER, loggedUserID)
    await updateDoc(userRef, {
      tokens: tokens - 5
    })
    navigation.goBack()
  } 

  return (
    <ScrollView contentContainerStyle={quickQuestionStyles.container}>
      <Title text="Only Knowledge" />
      <Heading text='New quick question' />
      <View style={quickQuestionStyles.innerContainer}>
        <TextInput
          style={quickQuestionStyles.questionBox}
          placeholder='Type your question...'
          multiline={true}
          numberOfLines={30}
          onChangeText={text => setQuestion_Input(text)} />
      </View>
      <Label text="Question is about:" sizeOfFont={28} />
      <SubjectChoicePanel favoriteSubjects={subjects} setFavoriteSubjects={setSubjects} />
      <Pressable onPress={saveQuestion}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
      </Pressable>
      <Label 
        text={`You have ${tokens} tokens`} 
        sizeOfFont={16}
        color={tokens >= 5 ? '#0c0275' : '#a8030e'}
        />

    </ScrollView>
  )
}