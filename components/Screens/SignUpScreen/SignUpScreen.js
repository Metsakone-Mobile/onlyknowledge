import { View, SafeAreaView, Text, TextInput, Pressable, Button, Modal, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, firestore, setDoc, doc, USER } from '../../../firebase/Config'
import signUpStyles from './SignUpStyles'
import CustomButton from '../../Customs/CustomButton'
import SubjectButton from '../../Customs/SubjectButton'

// A component where a new user can create an account.

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [favoriteSubjects, setFavoriteSubjects] = useState([
    {
      label: 'Math',
      value: 'Math',
      isChosen: false
    },
    {
      label: 'Physics',
      value: 'Physics',
      isChosen: false
    },
    {
      label: 'Biology',
      value: 'Biology',
      isChosen: false
    },
    {
      label: 'Chemistry',
      value: 'Chemistry',
      isChosen: false
    }
  ])
  

  // Firebase authentication is used in creating the account. For more info on how it works
  // check out official documentation at https://firebase.google.com/docs/auth/web/start

  const createAccount = () => {
    if (password === comparePassword) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user
          setModalVisible(true)
          saveUser(user.uid)
        })
        .catch(error => {
          const errorCode = error.code
          const errorMsg = error.message
          alert(errorMsg)
        })
    } else {
      alert('Passwords do not match')
    }
  }

  const saveUser = async (userId) => {
    await setDoc(doc(firestore, USER, userId), {
      name: name
    }).catch(err => console.log(err))
  }

  const close = () => {
    setModalVisible(false)
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={signUpStyles.container}>
      <Text style={signUpStyles.mainTitle}>ONLY KNOWLEDGE</Text>
      <ScrollView contentContainerStyle={signUpStyles.signUpContainer} bounces={false}>
            <TextInput style={signUpStyles.inputField} 
            placeholder='Name' 
            value={name}
            onChangeText={text => setName(text)}
            />
            <TextInput style={signUpStyles.inputField} 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <TextInput style={signUpStyles.inputField}
            placeholder='Username'
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <TextInput style={signUpStyles.inputField}
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <TextInput style={signUpStyles.inputField} 
            placeholder='Re-enter password'
            secureTextEntry={true}
            value={comparePassword}
            onChangeText={text => setComparePassword(text)}
            />
            <Text style={signUpStyles.label}>Favorite subjects</Text>
            <View style={signUpStyles.buttonContainer}>
            <SubjectButton options={favoriteSubjects} onPress={(subjects) => setFavoriteSubjects(subjects)}/>
            </View>
            <Pressable onPress={createAccount}>
            {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
            </Pressable>
        </ScrollView>
        
        
        <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose= {close}
        >
            <View style={signUpStyles.modalContainer}>
                <View style={signUpStyles.modalView}>
                    <Text>Account created succesfully!</Text>
                    <Button title='Go to login' onPress={close} />
                </View>
            </View>
        </Modal>
    </SafeAreaView>
  )
}