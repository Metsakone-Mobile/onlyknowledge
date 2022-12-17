import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Circles() {
  return (
    <>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </>
  )
}

const styles= StyleSheet.create({
    circle1: {
        position: 'absolute',
        right: 69,
        top: 50,
        height: 700,
        width: 700,
        borderRadius: 350,
        backgroundColor: '#ffca99',
    },
    circle2: {
        position: 'absolute',
        bottom: 10,
        left: 100,
        backgroundColor: '#f7884d',
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    circle3: {
        position: 'absolute',
        top: 20,
        right: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#f7410a',
    },
})