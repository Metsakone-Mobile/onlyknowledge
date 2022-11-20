
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import MyProfile from '../Screens/MyProfileScreen/MyProfile';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';

export default function ProfileNavigator() {

const Stack = createStackNavigator()

return(

    <Stack.Navigator >
        <Stack.Screen name=' My Profile' component={MyProfile} />
        <Stack.Screen name='Edit Profile'component={EditProfile}/>


    </Stack.Navigator>

)

}

