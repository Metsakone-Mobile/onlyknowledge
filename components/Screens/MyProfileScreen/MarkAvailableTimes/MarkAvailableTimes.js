import { View, Text, Platform, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { firestore, addDoc, collection } from '../../../../firebase/Config'
import Label from '../../../Customs/TextWrappers/Label'
import CustomButton2 from '../../../Customs/Buttons/CustomButton2'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function MarkAvailableTimes({loggedUserID}) {

  const [ date, setDate ] = useState(new Date())
  const [ time, setTime ] = useState(new Date())

  const onChangeDate = (event, selectedDate) => {
    const chosenDate = selectedDate || date
    setDate(chosenDate)
  }

  const onChangeTime = (event, selectedTime) => {
    const chosenTime = selectedTime || time
    setTime(chosenTime)
  }

  const addAvailability = () => {
   /* const docRef = updateDoc(doc(firestore, USER, loggedUserID), {
        tutoringTimes: arrayUnion({ date: date.toLocaleDateString(), time: time.toLocaleTimeString() , isAvailable: true, tutorID: loggedUserID})
      }).then(()=> {
        Alert.alert ('Availability added!')
      }).catch(error => {
        console.log('Damn..');
      })  */
      const docRef = addDoc(collection(firestore, "Bookings"), {
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString(),
        tutorID: loggedUserID,
        isAvailable: true
      });
      setDate(new Date())
      setTime(new Date())
      Alert.alert('Appointment added!')
  }


  return (
    <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
        <View style={{flex: 1, alignItems: 'center'}}>
        <Label sizeOfFont={28} text='Add a new availability' color='#f9b87b'/>
            <View style={{flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-around', padding: 20 }}>
                <Label text='Select date' sizeOfFont={24} />
            { Platform.OS === 'ios' && (
                <DateTimePicker 
                    style={{width: '100%'}}
                    mode={'date'}
                    display='default'
                    value={date}
                    onChange={onChangeDate}
                />
            )}
            { Platform.OS === 'android' && (
                <DateTimePicker 
                    mode={'date'}
                    display='default'
                    value={date}
                    onChange={onChangeDate}
                />
            )}
            </View>
            <View style={{flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-around', padding: 20 }}>
                <Label text='Select Time' sizeOfFont={24} />
            { Platform.OS === 'ios' && (
                <DateTimePicker 
                    style={{width: '100%'}}
                    mode={'time'}
                    display='default'
                    value={time}
                    onChange={onChangeTime}
                />
            )}
            { Platform.OS === 'android' && (
                <DateTimePicker 
                    mode={'time'}
                    display='default'
                    value={time}
                    onChange={onChangeTime}
                />
            )}
            </View>
            <Pressable onPress={addAvailability}>
                {(state) => <CustomButton2 pressed={state.pressed} buttonText='Add availability' color='#32d106'/>}
            </Pressable>
            </View>
    </View>
  )
}