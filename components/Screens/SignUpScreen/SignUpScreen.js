import { View, SafeAreaView, Text, TextInput, Pressable, Button, Modal, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, firestore, setDoc, doc, USER } from '../../../firebase/Config'
import signUpStyles from './SignUpStyles'
import CustomButton from '../../Customs/CustomButton'
import SubjectButton from '../../Customs/SubjectButton'
import ProfileDescription from '../../Customs/ProfileDescription'

// A component where a new user can create an account.

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isTutor, setIsTutor] = useState(false)
  const [profileDescription, setProfileDescription] = useState('')
  const [favoriteSubjects, setFavoriteSubjects] = useState([])
  

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
      name: name,
      username: username,
      isTutor: isTutor,
      favoriteSubjects: favoriteSubjects,
      profileDescription: profileDescription
    }).catch(err => console.log(err))
  }

  const close = () => {
    setModalVisible(false)
    navigation.navigate('Login')
  }

  const toggleIsTutor = () => {
    setIsTutor(!isTutor)
  }

  /*const testFunc = () => {
    console.log('name: ', name)
    console.log('username: ', username)
    console.log('isTutor: ', isTutor)
    console.log('favorite subjects: ', favoriteSubjects)
  }*/

  return (
    <SafeAreaView style={signUpStyles.container}>
      <Text style={signUpStyles.mainTitle}>ONLY KNOWLEDGE</Text>
      {
        favoriteSubjects.map((sub, i) => (
          <Text key={i}>{sub}</Text>
        ))
      }
      <ScrollView contentContainerStyle={signUpStyles.signUpContainer} bounces={false}>
            <TextInput style={signUpStyles.inputField} 
            placeholder='Name' 
            value={name}
            onChangeText={text => setName(text)}
            />
            <TextInput style={signUpStyles.inputField} 
            placeholder='Email'
            keyboardType='email-address'
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
            <View style={signUpStyles.isTutorContainer}>
              <Text style={[signUpStyles.label, {fontSize: 24, marginBottom: 0}]}>Make me a tutor</Text>
              <Switch 
                trackColor={{ false: '#eca04d', true: '#0c0275'}}
                thumbColor={isTutor ? '#eca04d' : '#f21e0f'}
                ios_backgroundColor='#423d3d'
                onValueChange={toggleIsTutor}
                value={isTutor}
              />
            </View>
            <Text style={signUpStyles.label}>Favorite subjects</Text>
            <View style={signUpStyles.buttonContainer}>
            <SubjectButton favoriteSubjects={favoriteSubjects} setFavoriteSubjects={setFavoriteSubjects}/>
            </View>
            <ProfileDescription setProfileDescription={setProfileDescription}/>
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