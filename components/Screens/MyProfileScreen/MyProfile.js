import { View, Text, Image, TouchableOpacity, Modal, ScrollView, SafeAreaView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import { EvilIcons } from '@expo/vector-icons';
import MyProfileStyles from './MyProfileStyles'



export default function MyProfile({navigation}) {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [subjects, setSubjects] = useState([])
  const [photoURL, setPhotoURL] = useState ('https://res.cloudinary.com/dapbyrfgw/image/upload/v1669032383/blank-profile-picture_drj6hi.webp')



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
      setPhotoURL(docSnap.data().photoURL)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])




//<Text key={index} style={myProfileStyles.listSubjects}> {subjects}</Text>

  return (
  

  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} >
    <ScrollView  style={MyProfileStyles.container}
      contentContainerStyle={{justifyContent: 'center',  alignItems: 'center' }}
      showsVerticalScrollIndicator={false}>
        
        <Image style={myProfileStyles.profilePic} source={{uri:photoURL}}/>
        <Text style={myProfileStyles.mainTitle}>{name}</Text>
        
        <Text style={myProfileStyles.label}> user ID:{loggedUserID}</Text>
        <View style={myProfileStyles.btnWrapper}>
          <TouchableOpacity style={myProfileStyles.btn}
            onPress={() => {navigation.navigate('Edit Profile')}}>
              <Text style={{color: '#000000'}}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myProfileStyles.btn} 
            onPress={() => logout()}>
              <Text style={{color: '#000000'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text>My Favorite subjects:</Text>
    <View style={{width: '80%'}}>
      <Pickers/>
    </View>

     {/*  <View style={myProfileStyles.subjectsContainer}>
        {subjects.map((favoriteSubjects, index) =>{
          return(
          <Text key={index} style={myProfileStyles.listSubjects}> {favoriteSubjects}</Text>);
        })}

      </View> */}

  </ScrollView>
  </SafeAreaView>

  )
}