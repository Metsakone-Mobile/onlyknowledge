import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../TextWrappers/Heading'

export default function NotificationCard({notificationDetails, bookingNotificationDetails}) {



  if(notificationDetails){
    return (
      <View style={styles.notificationBox}>
        <Heading text="Question answered!" />  
        <Text>{notificationDetails.answerDate}</Text>
        <Text numberOfLines={1}>{notificationDetails.answeredBy} answered your question "{notificationDetails.question_input}"</Text>
      </View>
    )
  } else if(bookingNotificationDetails){
    return (
      <View style={styles.notificationBox}>
        <Heading text="Booking!" />  
        <Text numberOfLines={1}>{bookingNotificationDetails.student} booked a session with you on {bookingNotificationDetails.date}</Text>
      </View>
    )
    
  }
  
}

const styles = StyleSheet.create({
    notificationBox: {
        minHeight: 120,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#f5f2eb',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        marginBottom: 10,
        marginTop: 20
    }
})