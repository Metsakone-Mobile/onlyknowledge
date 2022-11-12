import { View, Text, TextInput, Pressable, Button } from 'react-native'
import React, {useContext, useEffect, useState } from 'react'
import { firestore, setDoc, doc, getDoc, QUESTIONS, USER } from '../../../firebase/Config'
import quickQuestionStyles from './QuickQuestionStyles'
import { AuthContext } from '../../../context/AuthContext'



export default function QuickQuestion() {
  const [question_id, setQuestion_Id] = useState('');
  const [question_input, setQuestion_Input] = useState('');
  const [question_field, setQuestion_Field] = useState('');
  const [name, setName] = useState('');
  const { loggedUserID } = useContext(AuthContext)



  const getUserInfo = async() => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  },[])

    function saveQuestion() {
      setDoc(doc(firestore, QUESTIONS,name ), {
        question_input: question_input,
        name: name
      }).then(() => {
        console.log('data submitted');
      }).catch((error) => {
          console.log(error)
      });;
    }
  
  return (
    <View style={quickQuestionStyles.container}>
      <Text style={quickQuestionStyles.mainTitle}>Quick Question</Text>

      <View style={quickQuestionStyles.innerContainer}>
        <Text style={quickQuestionStyles.label}>State your question</Text>
        <Text style={quickQuestionStyles.label}
        onChangeText={name => setName({name})}
        >{name}</Text>
        <TextInput
          style={quickQuestionStyles.questionBox}
          placeholder='Start typing...'
          multiline={true}
          numberOfLines={30} 
          onChangeText = {text => setQuestion_Input(text)}/>
      </View>
      <Button title='Send' onPress={saveQuestion}/>

    </View>
  )
}