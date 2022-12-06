import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/Navigators/TabNavigator'
import LoginNavigator from './components/Navigators/LoginNavigator';

import { AuthContext } from './context/AuthContext'

export default function App() {

  // A couple of state variables, of which isLogged is used to determine wheter the user is logged and main content
  // can be rendered. If the user is not logged in, login/signup pages are shown.
  // loggedUserID state is set via useContext from LoginScreen and it is used to retrieve correct user data on other pages
  // such as MyProfile.
  
  const [isLogged, setIsLogged] = useState(false)
  const [loggedUserID, setLoggedUserID] = useState('')
  const [isUserTutor, setIsUserTutor] = useState(false)


  if(!isLogged){
    return (
      <NavigationContainer>
        <AuthContext.Provider value={{setIsLogged, setLoggedUserID, setIsUserTutor}}>
        <LoginNavigator />
        </AuthContext.Provider>
      </NavigationContainer>
    ) 
    } else {
      return (
        <NavigationContainer>
          <AuthContext.Provider value={{loggedUserID, isUserTutor, setIsLogged}}>
          <TabNavigator />
          </AuthContext.Provider>
        </NavigationContainer>
      );
  }
  
}


