import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

import { firestore, collection, query, where, getDocs, USER, doc, getDoc  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import styles, { findATutorStyles } from './FindATutorStyles'
import Circles from '../../Customs/Decoratives/Circles'
import { Searchbar } from 'react-native-paper';
import Search from '../../Customs/Search/Search'





export default function FindATutor() {

  const { loggedUserID } = useContext(AuthContext)

    const [tutor, setTutor] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [name, setName] = useState('')
    const [input, setInput] = useState("");
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
            favoriteSubjects: doc.data().favoriteSubjects,
            userId: doc.data().userId,
            
            
          }
          availableTutors.push(tutorSearch)
      })
      setTutor(availableTutors)
      setIsLoaded(true)
      
      
    }  
  
    useEffect(() => {
      getTutors()
    }, [])

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

    

    const executeSearch = (search) =>{
      console.log("täällä on" + tutor)
      const searchArray = tutor.filter((item) => item.tutor.startsWith(search));
      setFilteredvalues(searchArray)

    }

    
    
    
    
    if(isLoaded === false) {
      return <View><Text>Loading...</Text></View>
    } else {
  return (
    <ScrollView>
      
    <View style={findATutorStyles.container}>
    <Circles />
      <Text>Käyttäjä: {name}</Text>
          <Text>Tutors:</Text>

          <Search executeSearch={executeSearch} />

          <FlatList
          data={filteredvalues}
          renderItem={({item}) => (
			
            <View style={findATutorStyles.tutorCard} 
              key={item.name}>
                <View>
                  <Image style={findATutorStyles.profilePic} />
                </View>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{item.profileDescription}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Tutor:</Text>
                
                <Text style={findATutorStyles.tutorname}>{item.tutor}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Subjects I teach:</Text>
                
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects}</Text>
            </View>
            
           )}
          
           />


          
        </View>
        </ScrollView>
  )
           }
}

/*<View style={findATutorStyles.tutorCard} 
              key={item.name}>
                <View>
                  <Image style={findATutorStyles.profilePic} />
                </View>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{item.profileDescription}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Tutor:</Text>
                
                <Text style={findATutorStyles.tutorname}>{item.tutor}</Text>
                <Text style={findATutorStyles.tutornamehHader}>Subjects I teach:</Text>
                
                <Text style={findATutorStyles.tutorname}>{item.favoriteSubjects}</Text>
            </View> */


            /*<Searchbar placeholder="Search" 
          onChangeText={(text) => {setInput(text)}} value={input} />

          <FlatList
          data={filteredvalues}
          renderItem={({item}) => (
			
            <View>
            <Text style={findATutorStyles.tutornamehHader}>Tutor:</Text>
                
            <Text style={findATutorStyles.tutorname}>{item.tutor}</Text>
            </View>
            
           )}
           keyExtractor={(item) => "" + item.tutor}
           />*/