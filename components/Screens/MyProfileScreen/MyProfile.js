import { View, Text, Image, TouchableOpacity, TextIn, ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import { EvilIcons } from '@expo/vector-icons';



export default function MyProfile({navigation}) {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [subjects, setSubjects] = useState([])
  const [photoURL, setPhotoURL] = useState ('')



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
  <View style={myProfileStyles.container}>
   <View style={{width:'100%', flexDirection: 'row', justifyContent:'flex-end', paddingTop:16, paddingLeft: 16, marginRight:10,}}>
            <TouchableOpacity style={{alignItems:'flex-end'}} >
            <EvilIcons name="pencil" size={24} color="black"  
                onPress={() => navigation.navigate('Edit Profile')} 
                
            />
            </TouchableOpacity>
          </View>
    
    <View style={myProfileStyles.profileContent}>
      <Image style={myProfileStyles.profilePic} source={{uri: photoURL}}/>
    </View>

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