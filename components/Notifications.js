import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../Styles'
import notificationsStyles from '../styles/NotificationsStyles'

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Notifications</Text>
        <ScrollView contentContainerStyle={styles.innerContainer}>
            <View style={notificationsStyles.messageBox}>
                <Text>Somebody answered your quickie....</Text>
            </View>
            <View style={notificationsStyles.messageBox}>
                <Text>Somebody answered your quickie....</Text>
            </View>
            <View style={notificationsStyles.messageBox}>
                <Text>Somebody answered your quickie....</Text>
            </View>

        </ScrollView>
    </View>
  )
}