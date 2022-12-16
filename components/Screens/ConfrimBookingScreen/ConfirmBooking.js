import { View, Text, Image, TouchableOpacity, TextInput,SafeAreaView, ScrollView, ImageBackground, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER, updateDoc, collection } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import { ConfirmBookingStyles } from './ConfirmBookingStyles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import CustomButton from '../../Customs/Buttons/CustomButton'
import Circles from '../../Customs/Decoratives/Circles'



export default function ConfirmBooking({route, navigation}) {

  const { loggedUserID } = useContext(AuthContext)

  const [userData, setUserData] = useState('')
  const [image,setImage]= useState(null)
  const [ email, setEmail] = useState(route.params?.email)
  const [tutorDate, setTutordate] = useState(route.params?.tutorDate)
  const [tutorTime, setTutortime] = useState(route.params?.tutorTime)


  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setPhotoURL(docSnap.data().photoURL)
      setSubjects(docSnap.data().favoriteSubjects)
      setUserData(docSnap.data())
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])
 
  const updateUser = async () => {
     const docRef = updateDoc(doc(firestore, USER, loggedUserID), {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      favoriteSubjects: subjects,
      photoURL: photoURL,
      
    }).then(()=> {
      Alert.alert ('Profile is updated!',
      'Your profile has been updated successfully.')
    
    }).catch((error) => {
      console.log('ounou');
    })  
    navigation.goBack()

}


 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} > 
    <Circles/>
      <ScrollView
      contentContainerStyle={{justifyContent: 'space-between',  alignItems: 'center' }}
      showsVerticalScrollIndicator={false}>
      <View style={ConfirmBookingStyles.container}></View>
      
      <Text>TÄNNE VOI TUODA TIETOJA + {tutorDate} + {tutorTime} + {email}</Text>

      <Text>{tutorDate} + {tutorTime} + {email}</Text>
      
      <Pressable onPress={updateUser}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Book!'} />}
      </Pressable>
    
    </ScrollView>
  </SafeAreaView>


  )
}