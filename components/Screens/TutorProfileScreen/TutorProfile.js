import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useFocusEffect} from '@react-navigation/native'
import { firestore, collection, query, where, getDocs, USER, doc, getDoc  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import { findATutorStyles } from '../FindATutorScreen/FindATutorStyles'
import Circles from '../../Customs/Decoratives/Circles'
import { tutorProfileStyles } from './TutorProfileStyles'


import Search from '../../Customs/Search/Search'





export default function TutorProfile({navigate}) {

  
  const { loggedUserID } = useContext(AuthContext)
    const [tutor, setTutor] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [name, setName] = useState('')
    const email = 'joonas@joonas.fi'
    



    const getTutors = async () => {
      const questionsRef = collection(firestore, 'user')
      const q = query(questionsRef, where("email", '==', email))
    
      const querySnapShot = await getDocs(q)
      let availableTutors = []
      
      querySnapShot.forEach((doc) => {
          const tutorSearch = {
            tutor: doc.data().name,
            profileDescription: doc.data().profileDescription,
            searchvalue: doc.data().favoriteSubjects[0] 
            + doc.data().favoriteSubjects[1]
            + doc.data().favoriteSubjects[2]
            + doc.data().favoriteSubjects[3]
            + doc.data().name
            + doc.data().profileDescription,
            favoriteSubjects1: doc.data().favoriteSubjects[0],
            favoriteSubjects2: doc.data().favoriteSubjects[1],
            favoriteSubjects3: doc.data().favoriteSubjects[2],
            favoriteSubjects4: doc.data().favoriteSubjects[3],
            
            userId: doc.data().userId,
            photoURL: doc.data().photoURL,
            
            
            

          }
          
        
          availableTutors.push(tutorSearch)
      })
      setTutor(availableTutors)
      
      
      setIsLoaded(true)


      
    }  

    useFocusEffect(
      useCallback(() => {
        getTutors()
      }, [])
    )
  
    

    const getUserInfo = async () => {
      
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
    
      
    <View style={tutorProfileStyles.container}>
    <Circles />
      

          

            

           
            {tutor.map(item => (
			
             <View style={tutorProfileStyles.tutorCard} 
              key={item.name}>
                
                <View style={tutorProfileStyles.profilePicContainer}>
                
                  <Image style={tutorProfileStyles.profilePic} source={{uri: item.photoURL}}/>
                  
                </View>
                
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{item.profileDescription}</Text>
                <Text style={tutorProfileStyles.tutornamehHader}>Tutor:</Text>
                
                <Text style={tutorProfileStyles.tutorname}>{item.tutor}</Text>
                <Text style={tutorProfileStyles.tutornamehHader}>Subjects I teach:</Text>

                
                
                <Text style={tutorProfileStyles.tutorname}>{item.favoriteSubjects1}</Text>
                <Text style={tutorProfileStyles.tutorname}>{item.favoriteSubjects2}</Text>
                <Text style={tutorProfileStyles.tutorname}>{item.favoriteSubjects3}</Text>
                <Text style={tutorProfileStyles.tutorname}>{item.favoriteSubjects4}</Text>

                <Text style={tutorProfileStyles.tutornamehHader}>Available times:</Text>
            </View>
            

            ))}
            
           
          
           


          
        </View>
       
  )
           }


          }

