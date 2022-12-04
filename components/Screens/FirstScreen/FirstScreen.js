import { SafeAreaView, View, Text, Image, Pressable, Button, ScrollView } from 'react-native'
import React from 'react'
import firstScreenStyles from './FirstScreenStyles'
import CustomButton from '../../Customs/Buttons/CustomButton'
import PrettyButton from '../../Customs/Buttons/PrettyButton'
import Title from '../../Customs/TextWrappers/Title'

// The first screen to be shown when the app is launched.

export default function FirstScreen({navigation}) {

    const goToLogin = () => {
      navigation.navigate('Login')
    }

    const goToSignUp = () => {
      navigation.navigate('SignUp')
    }
  
    return (
      <SafeAreaView style={firstScreenStyles.container}>
        <ScrollView>
        <Title text1='only' text2='KNOWLEDGE'/>
          <Image
            style={firstScreenStyles.image}
            source={require('../../../assets/first_screen_bg_img.png')}
          />
          <View style={firstScreenStyles.infoContainer}>
            <Text style={firstScreenStyles.infoText}>Join and find tutoring</Text>
            <Text style={firstScreenStyles.infoText}>for your problems</Text>
            <Text style={firstScreenStyles.smallText}>And make us rich...</Text>
          </View>
          <Pressable onPress={goToSignUp}>
            {(state) => <CustomButton pressed={state.pressed} buttonText="Get started" />}
          </Pressable>
          <View style={firstScreenStyles.signInRow}>
              <Text>Already a user?</Text>
              <Pressable onPress={goToLogin}>
                {(state) => <PrettyButton pressed={state.pressed} buttonText="Sign In"/>}
              </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
  
