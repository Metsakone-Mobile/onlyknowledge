import { View, Text, Image, TouchableOpacity, TextInput,SafeAreaView, ScrollView, ImageBackground, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { firestore, doc, getDoc, USER, updateDoc, collection } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import EditProfileStyles from './EditProfileStyles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import CustomButton from '../../Customs/Buttons/CustomButton'
import * as ImagePicker from 'expo-image-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Radiobutton from '../../Customs/Buttons/RadioButton'


export default function EditProfile({ navigation}) {

  const { loggedUserID } = useContext(AuthContext)

  const [userData, setUserData] = useState('')
  const [email,setEmail] = useState('')
  const [image,setImage]= useState(null)
  const [subjects, setSubjects] = useState([])
  const [photoURL, setPhotoURL] = useState ('https://res.cloudinary.com/dapbyrfgw/image/upload/v1669032383/blank-profile-picture_drj6hi.webp')

  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';

  const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setPhotoURL(docSnap.data().photoURL)
      setSubjects(docSnap.data().favoriteSubjects)
      setUserData(docSnap.data())
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
      name: userData.name,
      username: userData.username,
      email: userData.email,
      favoriteSubjects: subjects,
      photoURL: photoURL,
      
    }).then(()=> {
      Alert.alert ('Profile is updated!',
      'Your profile has been updated successfully.')
    
    }).catch((error) => {
      console.log('ounou');
    })  
    navigation.goBack()

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
            <View style={EditProfileStyles.pictureContainer}>
              <MaterialCommunityIcons
                onPress={OpenImagePicker}
                name="camera"   style={EditProfileStyles.EditPicture}
                size={35}
                color="#fff"/>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View>
         <Text style={{marginTop: 10, fontSize: 24,}}> </Text>
      </View>
      <View style={EditProfileStyles.inputField}>
        <TextInput 
          placeholder="name"
          value={userData ? userData.name : '' }
          onChangeText={(txt) => setUserData({...userData, name: txt})}
          style={EditProfileStyles.inputStyle}
          />
      </View>
      <View style={EditProfileStyles.inputField}>
        <TextInput 
          placeholder="username"
          value={userData ? userData.username : '' }
          onChangeText={(txt) => setUserData({...userData, username: txt})}
          style={EditProfileStyles.inputStyle}
          />
      </View>
      <View>
 
  
      </View>

      
      <Radiobutton subjects={subjects}
      onPress ={(value) =>  
      { subjects.includes(value) ? setSubjects (subjects.filter(subject => subject !==value)) : setSubjects([...subjects, value])}}/>
        
      

       
      <Pressable onPress={updateUser}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit changes'} />}
      </Pressable>
    
    </ScrollView>
  </SafeAreaView>


  )
}