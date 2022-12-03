import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

import { firestore, collection, query, where, getDocs, USER  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import styles, { findATutorStyles } from './FindATutorStyles'
import Circles from '../../Customs/Decoratives/Circles'





export default function FindATutor() {

  const { loggedUserID } = useContext(AuthContext)

    const [tutor, setTutor] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [name, setName] = useState('')



    const getTutors = async () => {
      const questionsRef = collection(firestore, 'user')
      const q = query(questionsRef, where("isTutor", '==', true))
    
      const querySnapShot = await getDocs(q)
      let availableTutors = []
      querySnapShot.forEach((doc) => {
          const tutorSearch = {
            tutor: doc.data().name,
            profileDescription: doc.data().profileDescription,
            favoriteSubjects: doc.data().favoriteSubjects,
            userId: doc.data().userId,
            photoURL: doc.data().photoURL,
            
          }
          availableTutors.push(tutorSearch)
      })
      setTutor(availableTutors)
      setIsLoaded(true)
      console.log(availableTutors)
      console.log(photoURL)
    }  
  
    useEffect(() => {
      getTutors()
    }, [])

    const getUserInfo = async () => {
      console.log(loggedUserID)
      const docRef = doc(firestore, USER, loggedUserID)
      const docSnap = await getDoc(docRef)
  
      if (docSnap.exists()) {
        console.log("Doc data: ", docSnap.data())
        setName(docSnap.data().name)
      } else {
        console.log("Voe mavon silimä")
      }
    }
  
    useEffect(() => {
      getUserInfo()
    }, [])
    
    
    
    if(isLoaded === false) {
      return <View><Text>Loading...</Text></View>
    } else {
  return (
    <ScrollView>
      
    <View style={findATutorStyles.container}>
    <Circles />
      <Text>Käyttäjä: {name}</Text>
          <Text>Tutors:</Text>
           {tutor.map(tutor => (
            
            <View style={findATutorStyles.tutorCard} 
              key={tutor.name}>
                <View>
                  <Image style={findATutorStyles.profilePic} source={{uri: tutor.photoURL}}/>
                </View>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{tutor.profileDescription}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Tutor:</Text>
                
                <Text style={findATutorStyles.tutorname}>{tutor.tutor}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Subjects I teach:</Text>
                
                <Text style={findATutorStyles.tutorname}>{tutor.favoriteSubjects}</Text>
            </View>
           ))}
        </View>
        </ScrollView>
  )
           }
}