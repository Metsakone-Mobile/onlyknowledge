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

  const [userData, setUserData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [bookingId, setBookingId] = useState(route.params?.bookingId)
  const [tutorUsername, setTutorUsername] = useState(route.params?.tutorUsername)
  const [tutorDate, setTutordate] = useState(route.params?.date)
  const [tutorTime, setTutortime] = useState(route.params?.time)


  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setUserData(docSnap.data())
      setIsLoaded(true)
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])


const confirmBooking = () => {
  const docRef = updateDoc(doc(firestore, 'Bookings', bookingId), {
    isAvailable: false,
    tutor: tutorUsername,
    student: userData.username,
    studentID: loggedUserID,
    seenByTutor: false
  }).then(()=> {
    Alert.alert (`Successfully booked tutoring with ${tutorUsername}`)
    navigation.goBack()
  }).catch(error => {
    Alert.alert('Something went wrong.')
  })  
}

if(!isLoaded){
  <View><Text>Loading...</Text></View>
} else {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} > 
    <Circles/>
      <ScrollView
      contentContainerStyle={{justifyContent: 'space-between',  alignItems: 'center' }}
      showsVerticalScrollIndicator={false}>
      <View style={ConfirmBookingStyles.container}></View>
      
      <Text> Confirm booking a time with: {tutorUsername}</Text>
        <Text style={ConfirmBookingStyles.tutornamehHader}>Date: {tutorDate}</Text>
        <Text style={ConfirmBookingStyles.tutornamehHader}>Time: {tutorTime}</Text>
      
      <Pressable onPress={confirmBooking}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Book!'} />}
      </Pressable>
    
    </ScrollView>
  </SafeAreaView>


  )
 }
  
}