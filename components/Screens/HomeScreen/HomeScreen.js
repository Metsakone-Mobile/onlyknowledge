import { View, ScrollView, Pressable } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { firestore, doc, USER, getDoc } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import homeScreenStyles from './HomeScreenStyles'
import CustomButton from '../../Customs/Buttons/CustomButton'
import Title from '../../Customs/TextWrappers/Title'
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
    <ScrollView style={{backgroundColor: '#e5e5e5'}}>
    <View style={homeScreenStyles.container}>
      <Title text="Only Knowledge" />
        <Pressable onPress={goToFindATutor} style={{margin: 30}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='Find a tutor' />}
        </Pressable>
        <Pressable onPress={goToQuickQuestion} style={{margin: 15}}>
          {(state) => <CustomButton pressed={state.pressed} buttonText='Quick question' />}
        </Pressable>
        {
          isLoaded ? 
          <TokenInfo username={username} tokens={tokens}/>
          :
          null
        } 
    </View>
    </ScrollView>
  )
}