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


  let CloudinaryUrl = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';

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



    const openImagePicker = async () => {
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
        if (!pickerResult.cancelled) {
          setImage({ image: pickerResult.uri });

          //We need the image to be base64 in order to be formatted for Cloudinary
          let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
          
          let data = {
            "file": base64Img,
            "upload_preset": "wr3ifdpb",
          }
  
    
  //sends photo to cloudinary
      fetch(CloudinaryUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
          let data = await r.json()
          console.log(data.secure_url)
          return data.secure_url
      }).catch(err=>console.log(err))
      }
  }
/*   const pickImage = async() => {
    let permissionResultresult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })
    console.log (result);
    
     if(! result.cancelled){
    setImage(result.uri)
     }
  } */
  return (
    <View style={myProfileStyles.container}>
      <Text style={myProfileStyles.mainTitle}>My Profile</Text>

      <View style={MyProfileStyles.profileCircle}>
        <Image source={{ uri: "https://res.cloudinary.com/dapbyrfgw/image/upload/v1668424808/jbsfvjcd3dkakdavjgfj.png" }} style={myProfileStyles.profilePic} />
    </View>
    <View >
     <TouchableOpacity onPress={openImagePicker} > 
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