import { View, Text } from 'react-native'
import React from 'react'
import Heading from './TextWrappers/Heading'
import Label from './TextWrappers/Label'
import Title from './TextWrappers/Title'
import { AntDesign } from '@expo/vector-icons'

export default function TokenInfo({username, tokens}) {

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Heading text="Thank you" />
      <Title text={username} />
      <Heading text="for being a test user" />
      <AntDesign name="heart" size={64} color="#a8030e" />
      <Label text="You have" sizeOfFont={32} />
      <Label text={tokens} sizeOfFont={42} color='#a8030e' />
      <Label text="tokens." sizeOfFont={32} />
    </View>
  )
}