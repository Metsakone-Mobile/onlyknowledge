import { View, Text, TextInput, Pressable, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, setDoc, addDoc, doc, getDoc, QUESTIONS, USER, collection } from '../../../firebase/Config'
import quickQuestionStyles from './QuickQuestionStyles'
import { AuthContext } from '../../../context/AuthContext'
import CustomButton from '../../Customs/CustomButton'



export default function QuickQuestion() {
  const [question_input, setQuestion_Input] = useState('');
  const [question_field, setQuestion_Field] = useState('');
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
      name: name

    });
    }

  return (
    <View style={quickQuestionStyles.container}>
      <Text style={quickQuestionStyles.mainTitle}>Quick Question</Text>

      <View style={quickQuestionStyles.innerContainer}>
        <Text style={quickQuestionStyles.label}>State your question:</Text>
        <Text style={quickQuestionStyles.label}
          onChangeText={name => setName({ name })}
        >{name}</Text>
        <TextInput
          style={quickQuestionStyles.questionBox}
          placeholder='Start typing...'
          multiline={true}
          numberOfLines={30}
          onChangeText={text => setQuestion_Input(text)} />
      </View>
      <Pressable onPress={saveQuestion}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
      </Pressable>

    </View>
  )
}