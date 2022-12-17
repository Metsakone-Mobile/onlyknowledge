import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { useFocusEffect} from '@react-navigation/native'
import { firestore, collection, query, where, getDocs, USER, doc, getDoc } from '../../../firebase/Config'
import Circles from '../../Customs/Decoratives/Circles'
import styles from './TutorProfileStyles'
import { dateToSeconds } from '../../../utils/functions'








export default function TutorProfile({route, navigation}) {

    const [tutor, setTutor] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [ tutorID, setTutorID] = useState(route.params?.tutorID)
    const [tutoringTimes, setTutoringTimes] = useState([])
    

    const getAvailableTimes = async () => {
      const bookingsRef = collection(firestore, 'Bookings')
      const q = query(bookingsRef,  where("tutorID", '==', tutorID), where("isAvailable", '==', true))
      
      const querySnapShot = await getDocs(q)
      let tempAvailableTimes = []
      querySnapShot.forEach((doc) => {
          const availability = {
              date: doc.data().date,
              time: doc.data().time,
              isAvailable: doc.data().isAvailable,
              userId: doc.data().tutorID,
              bookingId: doc.id
            }
          tempAvailableTimes.push(availability)
      })
      console.log(tempAvailableTimes)
      setTutoringTimes(tempAvailableTimes.sort((time1, time2) => dateToSeconds(time1.date, time1.time) - dateToSeconds(time2.date, time2.time)))
    } 

    const getTutorInfo = async () => {
      
      const docRef = doc(firestore, USER, tutorID)
      const docSnap = await getDoc(docRef)
  
      if (docSnap.exists()) {
        console.log(typeof docSnap.data())
        console.log("Doc data: ", docSnap.data())
        setTutor(docSnap.data())
        setIsLoaded(true)
      } else {
        console.log("Voe mavon silimä")
      }
    }
  
    useEffect(() => {
      getTutorInfo()
    }, [])

    useFocusEffect(
      useCallback(() => {
        getAvailableTimes()
      }, [])
    )
    
    
if(isLoaded === false) {
   return <View><Text>Loading...</Text></View>
} else {
  return (
    <View style={styles.container}>
    <Circles />
      <View style={styles.tutorCard} >            
        <View style={styles.profilePicContainer}>
          <Image style={styles.profilePic} source={{uri: tutor.photoURL}}/>
        </View>
        <Text style={{fontWeight: 'bold', marginBottom: 5}}>{tutor.profileDescription}</Text>
        <Text style={styles.tutornamehHader}>Tutor:</Text>
        <Text style={styles.tutorname}>{tutor.username}</Text>
        <Text style={styles.tutornamehHader}>Subjects I teach:</Text>
        <Text>{tutor.favoriteSubjects.map(subject => subject + '\n')}</Text>
        <Text style={styles.tutornamehHader}>Book available times:</Text>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {tutoringTimes.map(tutoringTime =>(
              <TouchableOpacity key={tutoringTime.bookingId} style={styles.tutoringTimeBtn} onPress={() => {navigation.navigate('Confirm Booking', {bookingId: tutoringTime.bookingId, date: tutoringTime.date, time: tutoringTime.time, tutorUsername: tutor.username})}}>
                <Text>{tutoringTime.date}</Text>
                <Text>{tutoringTime.time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>  
        </View>
      </View>    
  )
}
}

