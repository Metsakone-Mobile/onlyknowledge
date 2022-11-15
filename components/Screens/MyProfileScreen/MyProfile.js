import { View, Text, Image, TouchableOpacity, TextIn, ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import MyProfileStyles from './MyProfileStyles'
import Cloudinary from '../../Customs/Cloudinary'
import SignUpStyles from '../SignUpScreen/SignUpStyles'


export default function MyProfile() {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [subjects, setSubjects] = useState([])



  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
      setEmail(docSnap.data().email)
      setUsername(docSnap.data().username)
      setSubjects(docSnap.data().favoriteSubjects)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

//<Text key={index} style={myProfileStyles.listSubjects}> {subjects}</Text>

  return (
  <View style={myProfileStyles.container}>

    
    <Cloudinary/>

    <ScrollView contentContainerStyle={myProfileStyles.textboxContainer} bounces={false}>
      <View style={myProfileStyles.textbox}>
        <Text style={{fontSize: 15, fontWeight: 'bold',}}>name:</Text>
      </View>
      <View style={myProfileStyles.textbox}>
        <Text style={myProfileStyles.textDetails}> {name}</Text>
      </View>

      <View style={myProfileStyles.textbox}>
        <Text style={{fontSize: 15, fontWeight: 'bold',}}>username:</Text>
      </View>
      <View style={myProfileStyles.textbox}>
        <Text style={myProfileStyles.textDetails}> {username}</Text>
      </View>

      <View style={myProfileStyles.textbox}>
        <Text style={{fontSize: 15, fontWeight: 'bold',}}>email:</Text>
      </View>
      <View style={myProfileStyles.textbox}>
        <Text style={myProfileStyles.textDetails}> {email}</Text>
      </View>
  
    
  
        

      </ScrollView> 
  
      
      <View style={myProfileStyles.subjectsContainer}>
        {subjects.map((favoriteSubjects, index) =>{
          return(
          <Text key={index} style={myProfileStyles.listSubjects}> {favoriteSubjects}</Text>);
        })}
      
      </View>
   
      <Pickers/>
  </View>
  )
}