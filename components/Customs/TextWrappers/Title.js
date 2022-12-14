import { View, Text } from 'react-native'
import React from 'react'
import TextWrapperStyles from './TextWrapperStyles'

import { useFonts } from 'expo-font'

export default function Title({text1, text2}) {

  const [loadedFont] = useFonts({                                 
    BlackOpsOne: require('../../../assets/fonts/BlackOpsOne-Regular.ttf'),
    ParisienneRegular: require('../../../assets/fonts/Parisienne-Regular.ttf'),

  })


  if(!loadedFont){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 42}}>{text1} {text2}</Text>
      </View>
    )
  }else {
    return (
          <View style={TextWrapperStyles.Title}>
            <Text style={{fontSize: 35, color: '#eca04d',fontFamily: "ParisienneRegular"}}>{text1}</Text>
            <Text style={{fontSize: 35, fontFamily: "BlackOpsOne"}}>{text2}</Text>
          </View>
      )
  }
  
}