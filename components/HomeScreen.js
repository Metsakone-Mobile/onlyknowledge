import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../Styles'
import homeScreenStyles from '../styles/HomeScreenStyles'

export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Only Knowledge</Text>
        <View style={styles.innerContainer}>
            <Pressable style={homeScreenStyles.pressable}>
                <Text style={styles.label} onPress={() => navigation.navigate('Find a tutor')}>Find a tutor</Text>
            </Pressable>
            <Pressable style={homeScreenStyles.pressable} onPress={() => navigation.navigate('Quick question')}>
                <Text style={styles.label}>Quick question</Text>
            </Pressable>
        </View>
    </View>
  )
}