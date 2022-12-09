import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Custom button with a change of color whenever pressed.
// This button can be reused anywhere, since the text is passed in as props.

export default function CustomButton({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#a8fa84'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  customButton: {
      backgroundColor: '#32d106',
      borderRadius: 45,
      marginTop: 5,
      marginBottom: 5,
      width: '50%',
      alignItems: 'center'
  },
  buttonText: {
      fontSize: 16,
      margin: 5,
      fontWeight: 'bold'
  }
})