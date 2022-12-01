import { View, Text, TextInput, Pressable, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, setDoc, addDoc, doc, getDoc, QUESTIONS, USER, collection } from '../../../firebase/Config'
import quickQuestionStyles from './NewQuickQuestionStyles'
import { AuthContext } from '../../../context/AuthContext'
import CustomButton from '../../Customs/Buttons/CustomButton'
import SubjectChoicePanel from '../../Customs/SubjectChoicePanel'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import Label from '../../Customs/TextWrappers/Label'


export default function NewQuickQuestion() {
  const [question_input, setQuestion_Input] = useState('');
  const [subjects, setSubjects] = useState([])
  const [name, setName] = useState('');
  const { loggedUserID } = useContext(AuthContext)



  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])



 const saveQuestion= async () => {
    const docRef = addDoc(collection(firestore, "Questions"), {
      question_input: question_input,
      name: name,
      userId: loggedUserID,
      answered: false,
      subjects: subjects,
      date: new Date().toLocaleDateString()
    });
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

    </ScrollView>
  )
}