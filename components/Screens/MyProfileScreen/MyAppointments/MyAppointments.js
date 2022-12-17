import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState} from 'react'
import { firestore, collection, query, where, getDocs, USER, doc, getDoc } from '../../../../firebase/Config'
import { dateToSeconds } from '../../../../utils/functions'
import PrettyButton from '../../../Customs/Buttons/PrettyButton'

export default function MyAppointments({loggedUserID, setModalVisible, isUserTutor}) {

    const [tutoringTimes, setTutoringTimes] = useState([])
    const [tutoringTimesAsStudent, setTutoringTimesAsStudent] = useState([])

    const getTutoringTimes = async () => {
        const tutoringsRef = collection(firestore, 'Bookings')
        const q = query(tutoringsRef,  where("tutorID", '==', loggedUserID))
        
        const querySnapShot = await getDocs(q)
        let tempTutorings = []
        querySnapShot.forEach((doc) => {
            const tutoringSession = {
                date: doc.data().date,
                time: doc.data().time,
                isAvailable: doc.data().isAvailable,
                tutorId: doc.data().tutorID,
                student: doc.data().student,
                bookingId: doc.id
              }
            tempTutorings.push(tutoringSession)
        })
        setTutoringTimes(tempTutorings.sort((time1, time2) => dateToSeconds(time1.date, time1.time) - dateToSeconds(time2.date, time2.time)))
    } 

    const getTutoringTimesAsStudent = async () => {
        const tutoringsRef = collection(firestore, 'Bookings')
        const q = query(tutoringsRef,  where("studentID", '==', loggedUserID))
        
        const querySnapShot = await getDocs(q)
        let tempTutorings = []
        querySnapShot.forEach((doc) => {
            const tutoringSession = {
                date: doc.data().date,
                time: doc.data().time,
                isAvailable: doc.data().isAvailable,
                tutorId: doc.data().tutorID,
                tutor: doc.data().tutor,
                student: doc.data().student,
                bookingId: doc.id
              }
            tempTutorings.push(tutoringSession)
        })
        setTutoringTimesAsStudent(tempTutorings.sort((time1, time2) => dateToSeconds(time1.date, time1.time) - dateToSeconds(time2.date, time2.time)))
    } 
    
      
  useEffect(() => {
    if(isUserTutor){
        getTutoringTimes()
    }
        getTutoringTimesAsStudent()
  }, [])    

  const closeModal = () =>  {
    setModalVisible(false)
  }
  
  
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
      <Text>MyAppointments</Text>
      <ScrollView style={{width: '100%', padding: 5}} showsVerticalScrollIndicator={false}>
        {isUserTutor &&
        <View>
        <Text>My tutoring times:</Text>
            {tutoringTimes.map(session => (
                <View key={session.bookingId} style={[styles.tutoringTimeBtn, !session.isAvailable && {backgroundColor: '#32d106'}]}>
                    <Text>Date: {session.date}</Text>
                    <Text>Time: {session.time}</Text>
                    {session.isAvailable ? 
                        <Text>Available for booking</Text>
                        :
                        <Text>Booked by: {session.student}</Text>
                    }
                    
                </View>
            ))}
        </View>  
        }  
        <Text>Booked as a student:</Text>
            {tutoringTimesAsStudent.map(session => (
                <View key={session.bookingId} style={[styles.tutoringTimeBtn, {backgroundColor: '#83b0f7'}]}>
                    <Text>Date: {session.date}</Text>
                    <Text>Time: {session.time}</Text>
                    <Text>Tutor: {session.tutor}</Text>
                </View>
            ))}
                    
      </ScrollView>
      <Pressable onPress={closeModal}>
        {(state) => <PrettyButton pressed={state.pressed} buttonText="Close" />}
      </Pressable>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        padding: 20,
        width: '80%',
        maxHeight: 500,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      tutoringTimeBtn:{
        width: '100%',
        borderWidth: 1,
        marginBottom: 5,
        padding: 5,
        backgroundColor: "white",
        opacity: 0.9,
        borderRadius:5,
        margin: 3,
      },
})