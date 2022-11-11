import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import notificationsStyles from './NotificationsStyles'

export default function Notifications() {
  return (
    <View style={notificationsStyles.container}>
      <Text style={notificationsStyles.mainTitle}>Notifications</Text>
        <ScrollView contentContainerStyle={notificationsStyles.innerContainer}>
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