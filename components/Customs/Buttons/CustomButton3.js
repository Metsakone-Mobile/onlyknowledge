import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


// Custom button with a change of color whenever pressed.
// This button can be reused anywhere, since the text is passed in as props.

export default function CustomButton({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#0c0275'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  customButton: {
      backgroundColor: '#f5f0f0',
      borderRadius: 45,
      alignItems: 'center',
      width: 300,
      borderWidth: 1,
  
  },
  buttonText: {
      fontSize: 20,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      marginBottom: 20,
      fontWeight: 'bold',
   
   
      
  }
})