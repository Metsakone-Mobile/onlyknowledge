import { Text } from 'react-native'
import React from 'react'


// Custom button with a change of color whenever pressed.
// This button can be reused anywhere, since the text is passed in as props.

export default function CustomButton({buttonText, pressed}) {
  return (
      <Text 
      style={[{
        color: '#eca04d',
        fontSize: 20,
        marginLeft: 10}, 
        pressed && {color: '#0c0275'}
        ]}>
        {buttonText}
    </Text>
  )
}