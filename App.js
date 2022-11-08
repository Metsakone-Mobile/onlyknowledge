import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator'
import LoginNavigator from './components/LoginNavigator';

import { AuthContext } from './context/AuthContext'

export default function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [loggedUser, setLoggedUser] = useState({})


  if(!isLogged){
    return (
      <NavigationContainer>
        <AuthContext.Provider value={{setIsLogged, setLoggedUser}}>
        <LoginNavigator />
        </AuthContext.Provider>
      </NavigationContainer>
    ) 
    } else {
      return (
        <NavigationContainer>
          <AuthContext.Provider value={{loggedUser}}>
          <TabNavigator />
          </AuthContext.Provider>
        </NavigationContainer>
      );
  }
  
}


