import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Title({text}) {

  const [loadedFont] = useFonts({                                 
    StyleScriptRegular: require('../../../assets/fonts/StyleScript-Regular.ttf')
  })


  if(!loadedFont){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 42}}>{text}</Text>
      </View>
    )
  }else {
    return (
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 42, fontFamily: 'StyleScriptRegular'}}>{text}</Text>
          </View>
      )
  }
  
}