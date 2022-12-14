import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useFocusEffect} from '@react-navigation/native'
import { firestore, collection, query, where, getDocs, USER, doc, getDoc  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import { findATutorStyles } from './FindATutorStyles'
import Circles from '../../Customs/Decoratives/Circles'

import Search from '../../Customs/Search/Search'





export default function FindATutor({navigation}) {

  const { loggedUserID } = useContext(AuthContext)
    const [tutor, setTutor] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [name, setName] = useState('')
    const [filteredvalues, setFilteredvalues] =useState([])
    



    const getTutors = async () => {
      const questionsRef = collection(firestore, 'user')
      const q = query(questionsRef, where("isTutor", '==', true))
    
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
            email: doc.data().email,
            userId: doc.data().userId,
            photoURL: doc.data().photoURL,
            
            
            

          }
          
        
          availableTutors.push(tutorSearch)
      })
      setTutor(availableTutors)
      setFilteredvalues(availableTutors)
      
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

    


    // hakee kaikesta & for each looppi favorite subjects
    const executeSearch = (search) =>{
      console.log("täällä on" + tutor)
      const searchArray = tutor.filter((item) => item.searchvalue.includes(search));
      setFilteredvalues(searchArray)
      

    }

    
    
    
    
    
    if(isLoaded === false) {
      return <View><Text>Loading...</Text></View>
    } else {
  return (
    
      
    <View style={findATutorStyles.container}>
    <Circles />
      

          <View style={findATutorStyles.searchBox}>
          <Search
           executeSearch={executeSearch} />
           </View>

          
          <FlatList
          
          nestedScrollEnabled
          data={filteredvalues}
          renderItem={({item}) => (

            

            <View>
            
			
             <View style={findATutorStyles.tutorCard} 
              key={item.name}>
                
                <View style={findATutorStyles.profilePicContainer}>
                <TouchableOpacity
                onPress={() => {navigation.navigate('Tutor Profile', { email : item.email })}}>
                  <Image style={findATutorStyles.profilePic} source={{uri: item.photoURL}}/>
                  </TouchableOpacity>
                </View>
                
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{item.profileDescription}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Tutor:</Text>
                
                <Text style={findATutorStyles.tutorname}>{item.tutor}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Subjects I teach:</Text>

                
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects1}</Text>
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects2}</Text>
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects3}</Text>
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects4}</Text>


            </View>
            </View>
            
           )}
          
           />


          
        </View>
       
  )
           }
}