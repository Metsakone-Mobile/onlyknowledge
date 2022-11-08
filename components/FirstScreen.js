import { View, Text, Image, Pressable, Button } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import styles from '../Styles'
import firstScreenStyles from '../styles/FirstScreenStyles'
import CustomButton from './CustomButton'

export default function FirstScreen({navigation}) {
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
          style={firstScreenStyles.image}
          source={require('../assets/first_screen_bg_img.png')}
        />
        <View style={firstScreenStyles.infoContainer}>
          <Text style={firstScreenStyles.infoText}>Join and find tutoring</Text>
          <Text style={firstScreenStyles.infoText}>for your problems</Text>
          <Text style={firstScreenStyles.smallText}>And make us rich, you dumbass bitch...</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          {(state) => <CustomButton pressed={state.pressed} buttonText="Get started" />}
        </Pressable>
        <View style={firstScreenStyles.signInRow}>
            <Text>Already a user?</Text>
            <Button title='Sign In' onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    )
  }
  
}
