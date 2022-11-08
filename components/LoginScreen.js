import { View, Text, TextInput, Pressable } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from '../firebase/Config'
import React, { useState, useContext } from 'react'
import styles from '../Styles'
import loginStyles from '../styles/LoginScreenStyles'
import CustomButton from './CustomButton'
import { AuthContext } from '../context/AuthContext'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {setIsLogged, setLoggedUser} = useContext(AuthContext)

  const login = () => {
    //console.log(email)
    //console.log(password)
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user
        //console.log(user)
        setIsLogged(true)
        setLoggedUser(user)

    })
    .catch(error => {
        const errorCode = error.code
        const errorMsg = error.message
        console.log(errorMsg)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>ONLY KNOWLEDGE</Text>
        <View style={loginStyles.loginContainer}>
            <TextInput style={loginStyles.inputField} 
            placeholder='Enter email address' 
            keyboardType='email-address'
            value={email} 
            onChangeText={text => setEmail(text)}
            />
            <TextInput style={loginStyles.inputField} 
            placeholder='Enter password'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            />
        </View>
        <Pressable onPress={login}>
            {(state) => <CustomButton pressed={state.pressed} buttonText={'Login'} />}
        </Pressable>

    </View>
  )
}