import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../Styles'

export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Only Knowledge</Text>
        <View style={styles.innerContainer}>
            <Pressable style={styles.pressableOption}>
                <Text style={styles.pressableLabel} onPress={() => navigation.navigate('Find a tutor')}>Find a tutor</Text>
            </Pressable>
            <Pressable style={styles.pressableOption} onPress={() => navigation.navigate('Quick question')}>
                <Text style={styles.pressableLabel}>Quick question</Text>
            </Pressable>
        </View>
    </View>
  )
}