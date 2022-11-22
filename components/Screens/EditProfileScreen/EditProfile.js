import { View, Text, Image, TouchableOpacity, TextInput,SafeAreaView, ScrollView, ImageBackground, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER, updateDoc, collection } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import EditProfileStyles from './EditProfileStyles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import CustomButton from '../../Customs/CustomButton'
import * as ImagePicker from 'expo-image-picker'
import SignUpStyles from '../SignUpScreen/SignUpStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function EditProfile() {

  const { loggedUserID } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState(username)
  const [email,setEmail] = useState('')
  const [image,setImage]= useState(null)
  const [photoURL, setPhotoURL] = useState ('https://res.cloudinary.com/dapbyrfgw/image/upload/v1669032383/blank-profile-picture_drj6hi.webp')

  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';

  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
      setEmail(docSnap.data().email)
      setUsername(docSnap.data().username)
      setPhotoURL(docSnap.data().photoURL)
    } else {
      console.log("Penus")
    }
  }

  useEffect(() => {
    getUserInfo()
  
  }, [])


   const OpenImagePicker = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
       setPhotoURL( data.secure_url)
    }).catch(err=>console.log(err))
    }
  }
 
 
  const updateUser = async () => {
     const docRef = updateDoc(doc(firestore, USER, loggedUserID), {
      name: name,
      username: username,
      email: email,
      photoURL: photoURL,
      
    }).then(()=> {
      console.log ('User is updated')
      Alert.alert ('Profile is updated!',
      'Your profile has been updated successfully.')
    
    }).catch((error) => {
      console.log('ounou');
    })       



}


 
  return (

  
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} > 
      <ScrollView style={EditProfileStyles.container}
      contentContainerStyle={{justifyContent: 'space-between',  alignItems: 'center' }}
      showsVerticalScrollIndicator={false}>
      <View style= {{marginTop:20}}>
        <TouchableOpacity>
          <ImageBackground source={{uri: photoURL }}
            style={{ width: 100,height: 100,}}
            imageStyle={{ borderRadius: 6}}>
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
              <MaterialCommunityIcons
              onPress={OpenImagePicker}
                name="camera"
                size={35}
                color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
          
          </View>
          </ImageBackground>
        </TouchableOpacity>
       </View>
        <View>
         <Text style={{marginTop: 10, fontSize: 24,}}> nimi</Text>
        </View>
        <View style={{flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    width:'80%'}}>
          <TextInput
            placeholder="username"
            value={username ? username : ''}
            onChangeText={(txt) => setUsername({username: txt})}
            style={{flex: 1,
              marginTop: Platform.OS === 'ios' ? 0 : -12,
              paddingLeft: 10,
              color: '#333333',}}
          />
        </View>

        <Pressable onPress={updateUser}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit changes'} />}
      </Pressable>
    {/* <View style={EditProfileStyles.container}>

      <Text style={EditProfileStyles.mainTitle}>MY DETAILS: </Text>

       <View style={{  
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,}}>
        <TouchableOpacity onPress={OpenImagePicker} > 
            <View style={SignUpStyles.profileCircle}>
              <Image source={ {uri: photoURL}} style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              backgroundColor: '#FF9800',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:30,}} />
            </View>
                <Text style={{ fontSize: 10,
                  marginTop: 10,
                  marginBottom:20, 
                  marginLeft:20,
                  }}>Choose profile picture</Text>
          </TouchableOpacity>
          </View>  

        <View style= {EditProfileStyles.innerContainer}>
          <TextInput style={EditProfileStyles.inputField}
              placeholder='name' 
              value={name}
              onChangeText={(name) => {setName(name)}}
            />
          <TextInput style={EditProfileStyles.inputField}
            placeholder='username' 
            value={username}
            onChangeText={(username) => {setUsername(username)}}
            />

          <TextInput  style={EditProfileStyles.inputField}
            placeholder='email' 
            value={email}
            onChangeText={(email) => {setEmail(email)}}
            />
        </View>

           <Pressable onPress={updateUser}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit changes'} />}
      </Pressable>

    </View> */}
  </ScrollView>
</SafeAreaView>


  )
}