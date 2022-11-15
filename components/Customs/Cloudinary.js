import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {firestore, doc, getDoc, USER} from '../../firebase/Config'
import * as ImagePicker from 'expo-image-picker'
import MyProfileStyles from '../Screens/MyProfileScreen/MyProfileStyles'

export default function Cloudinary() {

let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';



const [image,setImage]= useState(null)
const [cloudImage,setCloudImage]= useState(null)

let imageURL = cloudImage


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
       setCloudImage( data.secure_url) //tässä setcloudimagessa tulee urli
       //setPhotoURL(cloudImage)// ei toimi
    }).catch(err=>console.log(err))
    }
}


  return (
     <View style={MyProfileStyles.container}>
   
 <View style={MyProfileStyles.ProfilepicView}>
  <TouchableOpacity onPress={OpenImagePicker} > 
  <View style={MyProfileStyles.profileCircle}>
     <Image source={{ uri: cloudImage }} style={MyProfileStyles.profilePic} />
  </View>
   <Text style={MyProfileStyles.editText}>Change profile picture</Text>
  </TouchableOpacity>
 
 </View>
 </View>
  )
}