import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import styles from './NotificationsStyles'
import Title from '../../Customs/TextWrappers/Title'
import Heading from '../../Customs/TextWrappers/Heading'
import Circles from '../../Customs/Decoratives/Circles'
import NotificationCard from '../../Customs/QuestionCards/NotificationCard'
import { AuthContext } from '../../../context/AuthContext'
import { firestore, collection, query, where, getDocs, USER, doc, updateDoc, getDoc } from '../../../firebase/Config'

export default function Notifications({navigation}) {

  const { loggedUserID, isUserTutor } = useContext(AuthContext)

    const [closedQuestions, setClosedQuestions] = useState([])
    const [bookedAppointments, setBookedAppointments] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

  const getOpenQuestions = async () => {
    const questionsRef = collection(firestore, 'Questions')
    const q = query(questionsRef, where("userId", '==', loggedUserID), where("answered", '==', true), where("answerViewed", '==', false))
  
    const querySnapShot = await getDocs(q)
    let tempAnsweredQuestions = []
    querySnapShot.forEach((doc) => {
        const formedQuestion = {
          answered: doc.data().answered,
          answer: doc.data().answer,
          answeredBy: doc.data().answeredBy,
          answerDate: doc.data().answerDate,
          name: doc.data().name,
          question_input: doc.data().question_input,
          userId: doc.data().userId,
          questionId: doc.id
        }
        tempAnsweredQuestions.push(formedQuestion)
    })
    setClosedQuestions(tempAnsweredQuestions)
    setIsLoaded(true)
    console.log(tempAnsweredQuestions)
  }  

  const getBookedAppointments = async () => {
    const bookingsRef = collection(firestore, 'Bookings')
    const q = query(bookingsRef, where("tutorID", '==', loggedUserID), where("isAvailable", '==', false), where("seenByTutor", '==', false))
  
    const querySnapShot = await getDocs(q)
    let tempBookedAppointments = []
    querySnapShot.forEach((doc) => {
        const appointment = {
          date: doc.data().date,
          time: doc.data().time,
          student: doc.data().student,
          bookingId: doc.id
        }
        tempBookedAppointments.push(appointment)
    })
    console.log(tempBookedAppointments)
    setBookedAppointments(tempBookedAppointments)
    setIsLoaded(true)
  }  

  useFocusEffect(
    useCallback(() => {
    getOpenQuestions()
    if(isUserTutor){
      getBookedAppointments()
    }
    }, [])
  )

  const markAsViewed = async(questionId) => {
    const questionToAnswerRef = doc(firestore, 'Questions', questionId)
    console.log(questionToAnswerRef)
    await updateDoc(questionToAnswerRef, {
        answerViewed: true
    })
  }

  const goSeeAnswer = (questionId) => {
    navigation.navigate('My answered questions', { fromNotifications: questionId})
    markAsViewed(questionId)
  }

  const markAsSeenByTutor = async(bookingId) => {
    const bookingsRef = doc(firestore, 'Bookings', bookingId)
    await updateDoc(bookingsRef, {
        seenByTutor: true
    })
    getBookedAppointments()
  }

  if(!isLoaded){
    return <View><Text>Loading...</Text></View>
  } else {
    return (
      <View style={styles.container}>
          <Circles />
          <ScrollView style={{flex: 1, width: '100%'}} showsVerticalScrollIndicator={false}>
            <Title text1="only" text2='KNOWLEDGE' />
            <Heading text="Notifications" />
            {bookedAppointments.map(appointment => (
              <TouchableOpacity onPress={() => markAsSeenByTutor(appointment.bookingId)} key={appointment.bookingId}>
                <NotificationCard bookingNotificationDetails={appointment} />
              </TouchableOpacity>
            ))}
            {closedQuestions.map(question => (
              <TouchableOpacity onPress={() => goSeeAnswer(question.questionId)} key={question.questionId}>
                  <NotificationCard notificationDetails={question} />
              </TouchableOpacity>
            ))}
          </ScrollView> 
        </View> 
    )
  }
}  
