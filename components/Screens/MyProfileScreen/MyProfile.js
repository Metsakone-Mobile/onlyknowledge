import { View, Text, Image, TouchableOpacity, TextIn} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import MyProfileStyles from './MyProfileStyles'
import Cloudinary from '../../Customs/Cloudinary'


export default function MyProfile() {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [subjects, setSubjects] = useState([])



  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
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
      <View style={myProfileStyles.mainTitle}>
        <Text style={myProfileStyles.label}> {name}</Text>
        


      </View>
      <Cloudinary/>
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