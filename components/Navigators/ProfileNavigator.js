
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MyProfile from '../Screens/MyProfileScreen/MyProfile';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';
import { AntDesign } from '@expo/vector-icons';



export default function ProfileNavigator({navigation}) {

const Stack = createStackNavigator()

const goBackToProfile = () => {
    navigation.navigate(' My Profile')
}

return(

    <Stack.Navigator >
        <Stack.Screen 
        name=' My Profile' 
        component={MyProfile}
        options={{
            headerTitle: '',
            headerStyle: {backgroundColor: '#f9b87b'},  
          }} 
        />
        <Stack.Screen 
        name='Edit Profile'
        component={EditProfile}
        options={{
            headerTitle: '',
            headerStyle: {backgroundColor: '#f9b87b'},  
            headerLeft: () => (
                <AntDesign 
                style={{marginLeft: 10}}
                name="arrowleft" 
                size={36}
                onPress={goBackToProfile} />
              ),
          }}
        />
    </Stack.Navigator>

)

}

