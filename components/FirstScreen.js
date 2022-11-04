import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import styles from '../Styles'
import CustomButton from './CustomButton'

export default function FirstScreen({login}) {
  const [loadedFont] = useFonts({                                 // A non-system font used.
    PridiRegular: require('../assets/fonts/Pridi-Regular.ttf')
  })

  if(!loadedFont){                                                // if-clause to get rid of "PridiRegular is a non-system font..."
    return null                                                   // the page loads after the font is loaded.
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.mainTitle, {fontFamily: 'PridiRegular'}]}>ONLY KNOWLEDGE</Text>
        <Image
          style={styles.firstScreenImg}
          source={require('../assets/first_screen_bg_img.png')}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>Join and find tutoring</Text>
          <Text style={styles.infoText}>for your problems</Text>
          <Text style={styles.smallText}>And make us rich, you dumbass bitch...</Text>
        </View>
        <Pressable onPress={login}>
          {(state) => <CustomButton pressed={state.pressed} buttonText="Get started" />}
        </Pressable>
      </View>
    )
  }
  
}
