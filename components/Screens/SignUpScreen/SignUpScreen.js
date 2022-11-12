import { View, Text, TextInput, Pressable, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, firestore, setDoc, doc, USER } from '../../../firebase/Config'
import signUpStyles from './SignUpStyles'
import CustomButton from '../../Customs/CustomButton'

// A component where a new user can create an account.

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

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
    <View style={signUpStyles.container}>
      <Text style={signUpStyles.mainTitle}>ONLY KNOWLEDGE</Text>
      <View style={signUpStyles.signUpContainer}>
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
      </View>
      <Pressable onPress={createAccount}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
      </Pressable>
      <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose={close}
      >
        <View style={signUpStyles.modalContainer}>
          <View style={signUpStyles.modalView}>
            <Text>Account created succesfully!</Text>
            <Button title='Go to login' onPress={close} />
          </View>
        </View>
      </Modal>
    </View>
  )
}