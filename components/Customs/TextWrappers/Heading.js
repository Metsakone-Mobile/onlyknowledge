import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Heading({text}) {

  const [loadedFont] = useFonts({                                 
    PridiRegular: require('../../../assets/fonts/Pridi-Regular.ttf')
  })


  if(!loadedFont){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 36}}>{text}</Text>
      </View>
    )
  }else {
    return (
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 36, fontFamily: 'PridiRegular'}}>{text}</Text>
          </View>
      )
  }
  
}