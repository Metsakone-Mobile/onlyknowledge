import { View, Text, TextInput, Pressable } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from '../../../firebase/Config'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import React, { useState, useContext } from 'react'
import loginStyles from './LoginScreenStyles'
import CustomButton from '../../Customs/CustomButton'
import { AuthContext } from '../../../context/AuthContext'

// A user with an existing account can log in.

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // The state variables from App.js broght here using useContext
  // The variables get values when the user logs in.
  const {setIsLogged, setLoggedUserID, setIsUserTutor} = useContext(AuthContext)


  // Firebase authentication is used in login-function.
  // For more information how it works check out official documentation at https://firebase.google.com/docs/auth/web/start
  
  const getUserInfo = async (userID) => {
    const docRef = doc(firestore, USER, userID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setIsUserTutor(docSnap.data().isTutor)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  const login = async() => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user
        setIsLogged(true)
        setLoggedUserID(user.uid)
        getUserInfo(user.uid)
    })
    .catch(error => {
        const errorCode = error.code
        const errorMsg = error.message
        console.log(errorMsg)
    })
  }

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.mainTitle}>ONLY KNOWLEDGE</Text>
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