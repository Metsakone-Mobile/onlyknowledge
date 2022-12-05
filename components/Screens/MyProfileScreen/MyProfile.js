import { View, Text, Image, TouchableOpacity, Modal, ScrollView, SafeAreaView, Button, Pressable} from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import MyProfileStyles from './MyProfileStyles'
import { useFocusEffect } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Entypo } from '@expo/vector-icons';




export default function MyProfile({navigation}) {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [profileDescription, setProfileDescription] = useState('')
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
      setProfileDescription(docSnap.data().profileDescription)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useFocusEffect(
    useCallback(() => {
    getUserInfo()
  }, [])

  )


  
  return (  
<SafeAreaView style={{flex: 1}} >
  <View style={myProfileStyles.container}>
    <View style={myProfileStyles.circle}></View>
    <Image style={myProfileStyles.profilePic} source={{uri:photoURL}}/>
    <Text style={myProfileStyles.mainTitle}>{username}</Text>
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
  <ScrollView  style={MyProfileStyles.innerContainer}
    contentContainerStyle={{justifyContent: 'center',  alignItems: 'center' }}
    showsVerticalScrollIndicator={false}>
    <View style={myProfileStyles.innerContainer}>
    <Text style={myProfileStyles.label}>NAME</Text>
      <Text style={myProfileStyles.aboutUser}>{name} </Text>
      <Text style={myProfileStyles.label}>ABOUT ME</Text>
      <Text style={myProfileStyles.aboutUser}>{profileDescription} </Text>
      <Text style={myProfileStyles.label}>My Favorite subjects:</Text> 
        {subjects.map((favoriteSubjects, index) =>{
        return(
        <Text key={index} style={myProfileStyles.aboutUser}> {favoriteSubjects}</Text>
        )})}
{/* 
              <Pressable onPress={()=> {setModalVisible(true)}}>
              <Entypo name="pencil" size={24} color="black" />
             </Pressable> */}
            </View>
{/*       
          <Modal
          animationType='slide'
          visible ={modalVisible}
          onRequestClose={close}
          >
          
          <View style={{
            marginTop: 100,
            padding: 20,
            backgroundColor: 'red',
            justifyContent:'center',
            alignItems: 'center',
            shadowColor: '#333',
            shadowOffset:{
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
             }}>

            <Text> This is modal</Text>
            <Pressable
              onPress={() => {
                setModalVisible(false)
              }}>
                <Text style={{marginTop: 50, color:'#333', fontWeight: 'bold'}}>KIINNI</Text>
            </Pressable>
          </View>
        </Modal> */}
   
       
      </ScrollView> 

   
   </View>
  </SafeAreaView>
      
)
}
      
     