import { View, Text, TextInput } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

import { firestore, collection, query, where, getDocs, USER  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import styles from './FindATutorStyles'





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
            
          }
          availableTutors.push(tutorSearch)
      })
      setTutor(availableTutors)
      setIsLoaded(true)
      console.log(availableTutors)
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
    <View>
      <Text>Käyttäjä: {name}</Text>
          <Text>Tutors:</Text>
           {tutor.map(tutor => (
            <View style={{minHeight: 120,
              width: '80%',
              backgroundColor: '#f5f2eb',
              paddingLeft: 20,
              paddingTop: 5,
              marginBottom: 20,}} 
              key={tutor.name}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{tutor.profileDescription}</Text>
                <Text style={{fontWeight: 'bold'}}>Tutor:</Text>
                <Text>{tutor.tutor}</Text>
                <Text>{tutor.favoriteSubjects}</Text>
            </View>
           ))}
        </View>
  )
           }
}