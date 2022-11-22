import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Button, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER, updateDoc, collection } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import EditProfileStyles from './EditProfileStyles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import CustomButton from '../../Customs/CustomButton'

export default function EditProfile() {

  const { loggedUserID } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [photoURL, setPhotoURL] = useState ('')

  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  
  }, [])


  const updateUser = async () => {
     const docRef = updateDoc(doc(firestore, USER, loggedUserID), {
      name: name,
      username: username,
      email: email
    }).then(()=>{
      console.log ('User is updated')
      Alert.alert ('Profile Updated!',
      'Your profile has been updated successfully.')
    
    }).catch((error) => {
      console.log('ounou');
    })       
}


 
  return (
    <View style={EditProfileStyles.container}>

      <Text style={EditProfileStyles.mainTitle}>MY DETAILS: </Text>
        <View style= {EditProfileStyles.innerContainer}>
          <TextInput style={EditProfileStyles.inputField}
              placeholder='name' 
              value={name}
              onChangeText={(name) => {setName(name)}}
            />
          <TextInput style={EditProfileStyles.inputField}
            placeholder='username' 
            value={username}
            onChangeText={(username) => {setUsername(username)}}
            />

          <TextInput  style={EditProfileStyles.inputField}
            placeholder='email' 
            value={email}
            onChangeText={(email) => {setEmail(email)}}
            />
        </View>

           <Pressable onPress={updateUser}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Save changes'} />}
      </Pressable>

    </View>
  )
}