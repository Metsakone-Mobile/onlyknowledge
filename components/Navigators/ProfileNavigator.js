
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import FindATutor from '../Screens/FindATutorScreen/FindATutor';
import MyProfile from '../Screens/MyProfileScreen/MyProfile';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';
import TutorProfile from '../Screens/TutorProfileScreen/TutorProfile';

export default function ProfileNavigator() {

const Stack = createStackNavigator()

return(

    <Stack.Navigator >
        <Stack.Screen name=' My Profile' component={MyProfile} />
        <Stack.Screen name='Edit Profile'component={EditProfile}/>
        <Stack.Screen name='Tutor Profile'component={TutorProfile}/>
    </Stack.Navigator>

)

}

