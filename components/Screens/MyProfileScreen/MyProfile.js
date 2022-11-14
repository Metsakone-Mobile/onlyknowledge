import { View, Text, Image, TouchableOpacity, TextInput, Button} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import myProfileStyles from './MyProfileStyles'
import Pickers from '../../Customs/Pickers'
import * as ImagePicker from 'expo-image-picker'
import MyProfileStyles from './MyProfileStyles'
import { AntDesign } from '@expo/vector-icons';


export default function MyProfile() {

  const { loggedUserID } = useContext(AuthContext)
  const [name, setName] = useState('')

  const [image,setImage]= useState(null)


  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
    } else {
      console.log("Voe mavon silimä")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])



  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })
    console.log (result);
    
     if(! result.cancelled){
    setImage(result.uri)
     }
  }
  return (
    <View style={myProfileStyles.container}>
      <Text style={myProfileStyles.mainTitle}>My Profile</Text>

      <View style={MyProfileStyles.profileCircle}>
        <Image source={{ uri: image }} style={myProfileStyles.profilePic} />
    </View>
    <View >
     <TouchableOpacity onPress={pickImage} > 
     <AntDesign name="camerao" size={40} color="white" />
      <Text>Change profile picture</Text>
     </TouchableOpacity>

    </View>

      <Text style={myProfileStyles.label}>{name}</Text>
{/* 

<View style={myProfileStyles.placeHolder}>
    <TextInput style={myProfileStyles.textInput} placeholder='name'/>
    </View>
    <View style={myProfileStyles.placeHolder}>
      <TextInput style={myProfileStyles.textInput} placeholder="Last name"
  
      />
    </View>
    <View style={myProfileStyles.placeHolder}>
      <TextInput style={myProfileStyles.textInput} placeholder='email adress'/>
    </View>
    <View style={myProfileStyles.placeHolder}>
      <TextInput style={myProfileStyles.textInput} placeholder='phone number' />
    </View>
      <Button title='save'/> 
    

 */}



    


      <Pickers/>
    </View>
  )
}