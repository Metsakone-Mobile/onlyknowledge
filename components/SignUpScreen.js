import { View, Text, TextInput, Pressable, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from '../firebase/Config'
import styles from '../Styles'
import signUpStyles from '../styles/SignUpStyles'
import CustomButton from './CustomButton'

export default function SignUpScreen({navigation}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const test = () => {
    console.log("hehe")
  }

  const createAccount = () => {
    if(password === comparePassword) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user
            setModalVisible(true)
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

  const close = () => {
    setModalVisible(false)
    navigation.navigate('Login')
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>ONLY KNOWLEDGE</Text>
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
        onRequestClose= {close}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text>Account created succesfully!</Text>
                    <Button title='Go to login' onPress={close} />
                </View>
            </View>
        </Modal>
    </View>
  )
}