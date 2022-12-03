import { View, Text } from 'react-native'
import React from 'react'
import Heading from './TextWrappers/Heading'
import Label from './TextWrappers/Label'
import { AntDesign } from '@expo/vector-icons'

export default function TokenInfo({username, tokens}) {

  return (
    <View style={{ justifyContent: 'center', alignItems: 'stretch', }}>
      <Heading text="Welcome to tutoring app! " />
      <Heading text={username} />
      <AntDesign name="heart" size={64} color="#a8030e" />
      <Label text="You have" sizeOfFont={16} />
      <Label text={tokens} sizeOfFont={42} color='#a8030e' />
      <Label text="tokens." sizeOfFont={32} />
    </View>
  )
}