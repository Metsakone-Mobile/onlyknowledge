import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Label({text, sizeOfFont, color}) {

  const [loadedFont] = useFonts({                                 
    PridiRegular: require('../../../assets/fonts/Pridi-Regular.ttf')
  })


  if(!loadedFont){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: sizeOfFont}}>{text}</Text>
      </View>
    )
  }else {
    return (
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: sizeOfFont, fontFamily: 'PridiRegular', color: color}}>{text}</Text>
          </View>
      )
  }
  
}