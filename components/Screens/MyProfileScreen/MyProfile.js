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



  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])



  return (
    <View style={myProfileStyles.container}>
      <View style={myProfileStyles.mainTitle}>
        <Text style={myProfileStyles.label}> {name}</Text>


      </View>
<Cloudinary/>
   
      <Pickers/>
    </View>
  )
}