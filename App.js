import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator'
import FirstScreen from './components/FirstScreen';

export default function App() {
  const [isLogged, setIsLogged] = useState(false)

  if(!isLogged){
    return (
      <FirstScreen login={() => setIsLogged(true)}/>
    ) 
    } else {
      return (
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      );
  }
  
}


