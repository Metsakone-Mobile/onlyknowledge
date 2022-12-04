import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Heading from './TextWrappers/Heading'
import Label from './TextWrappers/Label'
import { firestore, doc, USER, getDoc } from '../../firebase/Config'
import { AuthContext } from '../../context/AuthContext'

export default function TokenInfo() {

  const [tokens, setTokens] = useState(null)
  const { loggedUserID } = useContext(AuthContext)

  const getTokenInfo = async() => {
    const docRef = doc(firestore, 'user', loggedUserID)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      setTokens(docSnap.data().tokens)
    } else {
      console.log(`can't find tokens with id ${loggedUserID}`)
    }
  }

  useFocusEffect(
    useCallback(() => {
      if(loggedUserID){
        getTokenInfo()
      }
    }, [loggedUserID, tokens])
  )  

  return (
    <View style={{marginRight: 20, alignItems: 'center'}}>
    <Text style={{fontSize: 18}}>Tokens</Text>
    <Text style={[styles.tokenText, {color: tokens > 4 ? '#23029e' : '#9e020a'}]}>{tokens}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tokenText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})