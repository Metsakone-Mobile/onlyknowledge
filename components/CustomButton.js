import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Styles'

// Custom button with a change of color whenever pressed.
// This button can be reused anywhere, since the text is passed in as props.

export default function CustomButton({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#0c0275'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}