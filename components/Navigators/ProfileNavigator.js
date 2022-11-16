
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MyProfile from '../Screens/MyProfileScreen/MyProfile';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';

export default function ProfileNavigator() {

const Stack = createStackNavigator()

return(
    <Stack.Navigator >
        <Stack.Screen 
        name='Profile'
        component={MyProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Edit Profile'
        component={EditProfile}
        options={{
            headerTitle: 'Edit Profile',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              elevation: 0,
            },
        }}
        />


    </Stack.Navigator>

)

}

