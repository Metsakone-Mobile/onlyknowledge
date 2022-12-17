
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MyProfile from '../Screens/MyProfileScreen/MyProfile';
import EditProfile from '../Screens/EditProfileScreen/EditProfile';
import { AntDesign } from '@expo/vector-icons'
import Heading from '../Customs/TextWrappers/Heading'
import Tokens from '../Customs/TokenInfo'


export default function ProfileNavigator({navigation}) {

const Stack = createStackNavigator()

const goBackToProfile = () => {
    navigation.navigate(' My Profile')
  }
  

return(

    <Stack.Navigator >
        <Stack.Screen name=' My Profile' component={MyProfile} 
             options={{
                headerStyle: {backgroundColor: '#ffca99'},
                headerTitle: () => (
                  <Heading text="My Profile" size={24} />
                ),
                  headerRight: () => (
                    <Tokens />
                  )      
            }}
        />
        <Stack.Screen name='Edit Profile'component={EditProfile}
        options={{
            headerStyle: {backgroundColor: '#ffca99'},
            headerTitle: () => (
              <Heading text="My Profile" size={24} />
            ),
            headerLeft: () => (
              <AntDesign 
              style={{marginLeft: 10}}
              name="arrowleft" 
              size={36}
              onPress={goBackToProfile} />
            ),
            headerRight: () => (
              <Tokens />
            )      
          }}
        />
    </Stack.Navigator>

)

}

