import { View, ScrollView, Pressable, SafeAreaView, Text, Image } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { firestore, doc, USER, getDoc } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import homeScreenStyles from './HomeScreenStyles'
import CustomButton from '../../Customs/Buttons/CustomButton'
import TokenInfo from '../../Customs/TokenInfo'






export default function HomeScreen({ navigation }) {

  const { loggedUserID } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [tokens, setTokens] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const getUserInfo = async() => {
    const docRef = doc(firestore, 'user', loggedUserID)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      setUsername(docSnap.data().username)
      setTokens(docSnap.data().tokens)
      setIsLoaded(true)
    } else {
      console.log(`can't find user with id ${loggedUserID}`)
    }
  }

  const goToFindATutor = () => {
    navigation.navigate('Find a tutor')
  }

  const goToQuickQuestion = () => {
    navigation.navigate('Quick question navigator')
  }

  useFocusEffect(
    useCallback(() => {
      if(loggedUserID){
        getUserInfo()
      }
    }, [loggedUserID])
  )

  return (
<SafeAreaView>
    <View style={homeScreenStyles.upperContainer}>
      <View style={homeScreenStyles.layout}></View>
        <View style={homeScreenStyles.circle1}></View>
        <View style={homeScreenStyles.circle2}></View>
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
    </View>
    <View style={homeScreenStyles.containerDetails}>
     
      {
          isLoaded ? 
          <TokenInfo username={username} tokens={tokens}/>
          :
          null
        } 
        <Text style={{fontSize: 20, marginTop:10}}> Select an option below to start</Text>
    </View>
    </View>

   <ScrollView>
    <View style={homeScreenStyles.container}>
     
        <Pressable onPress={goToFindATutor} style={{margin: 15}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='FIND A TUTOR' />}
        </Pressable>
        <Pressable onPress={goToQuickQuestion} style={{margin: 15}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='QUICK QUESTION' />}
        </Pressable>
        
    </View>
    </ScrollView> 
  </SafeAreaView>
  )
}