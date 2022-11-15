import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {firestore, doc, getDoc, USER} from '../../firebase/Config'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons';
import MyProfileStyles from '../Screens/MyProfileScreen/MyProfileStyles'
import CloudinaryStyles from './CloudinaryStyles'

export default function Cloudinary() {

let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';

const { loggedUserID } = useContext(AuthContext)
const [name, setName] = useState('')

const [image,setImage]= useState(null)
const [cloudImage,setCloudImage]= useState(null)



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



  const OpenImagePicker = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert('Permission to access camera roll is required!');
        return;
  }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
    base64: true
   });
      if (!pickerResult.cancelled ===true) {
        setImage({ image: pickerResult.uri });

      //muutetaan kuvan muoto
        let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
        
        let data = {
          "file": base64Img,
          "upload_preset": "wr3ifdpb",
        }

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
        let data = await r.json()

        console.log(data.secure_url)
       setCloudImage( data.secure_url)
    }).catch(err=>console.log(err))
    }
}


  return (
     <View style={CloudinaryStyles.container}>
   
 <View style={CloudinaryStyles.ProfilepicView}>
  <TouchableOpacity onPress={OpenImagePicker} > 
  <View style={CloudinaryStyles.profileCircle}>
     <Image source={{ uri: cloudImage }} style={CloudinaryStyles.profilePic} />
  </View>
   <Text style={CloudinaryStyles.editText}>Change profile picture</Text>
  </TouchableOpacity>
 
 </View>
 </View>
  )
}