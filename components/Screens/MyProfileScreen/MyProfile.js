import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, Modal} from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { getAuth, signOut } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Label from '../../Customs/TextWrappers/Label'
import CustomButton2 from '../../Customs/Buttons/CustomButton2'
import MyAppointments from './MyAppointments/MyAppointments'
import MarkAvailableTimes from './MarkAvailableTimes/MarkAvailableTimes'
import { useFocusEffect } from '@react-navigation/native'




export default function MyProfile({navigation}) {

  const { loggedUserID, setIsLogged, isUserTutor } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [profileDescription, setProfileDescription] = useState('')
  const [subjects, setSubjects] = useState([])
  const [photoURL, setPhotoURL] = useState ('https://res.cloudinary.com/dapbyrfgw/image/upload/v1669032383/blank-profile-picture_drj6hi.webp')
  const [ modalVisible, setModalVisible ] = useState(false)


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

  const logout = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      setIsLogged(false)
      console.log('logged out')
    }).catch((err) => {
      console.log(err)
    })
  }
  
  return (  

    <ScrollView style={{flex: 1}}>
    <View style={myProfileStyles.container} >
      <View style={myProfileStyles.circle}></View>
      <Image style={myProfileStyles.profilePic} source={{uri:photoURL}}/>
      <Label sizeOfFont={28} text={username} />
      <View style={myProfileStyles.btnWrapper}>
        <TouchableOpacity style={myProfileStyles.btn}
        onPress={() => {navigation.navigate('Edit Profile')}}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myProfileStyles.btn} 
          onPress={logout}>
            <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, width: '100%', padding: 5, marginBottom: 10}}>
        <Text style={myProfileStyles.label}>NAME</Text>
        <Text style={myProfileStyles.aboutUser}>{name} </Text>
        <Text style={myProfileStyles.label}>ABOUT ME</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={[myProfileStyles.aboutUser, {flex: 1, flexWrap: 'wrap'}]}>{profileDescription} </Text>
        </View>
        <Text style={myProfileStyles.label}>My Favorite subjects:</Text> 
          {subjects.map((favoriteSubjects, index) =>{
          return(
          <Text key={index} style={myProfileStyles.aboutUser}> {favoriteSubjects}</Text>
          )})}
      </View>    
      <Pressable onPress={() => setModalVisible(true)}>
        {(state) => <CustomButton2 pressed={state.pressed} buttonText="Show my appointments" color='#eca04d'/>}
      </Pressable>
      {isUserTutor && 
      <MarkAvailableTimes loggedUserID={loggedUserID}/>
      }
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}  
      >
        <MyAppointments loggedUserID={loggedUserID} setModalVisible={setModalVisible} isUserTutor={isUserTutor} />
      </Modal>
    </View> 
  </ScrollView>
)
}
      
     