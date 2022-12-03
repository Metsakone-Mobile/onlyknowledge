import { View, SafeAreaView, Text, TextInput, Pressable, Button, Modal, ScrollView, Switch, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, firestore, setDoc, doc, USER } from '../../../firebase/Config'
import signUpStyles from './SignUpStyles'
import CustomButton from '../../Customs/Buttons/CustomButton'
import SubjectChoicePanel from '../../Customs/SubjectChoicePanel'
import ProfileDescription from '../../Customs/ProfileDescription'
import * as ImagePicker from 'expo-image-picker'
import SignUpStyles from './SignUpStyles'
import Title from '../../Customs/TextWrappers/Title'


// A component where a new user can create an account.

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image,setImage]= useState(null)
  const [photoURL, setPhotoURL] = useState('https://res.cloudinary.com/dapbyrfgw/image/upload/v1669032383/blank-profile-picture_drj6hi.webp')
  const [comparePassword, setComparePassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isTutor, setIsTutor] = useState(false)
  const [profileDescription, setProfileDescription] = useState('')
  const [favoriteSubjects, setFavoriteSubjects] = useState([])

  // Firebase authentication is used in creating the account. For more info on how it works
  // check out official documentation at https://firebase.google.com/docs/auth/web/start
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dapbyrfgw/image/upload';


  const createAccount = () => {
    if (password === comparePassword) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user
          setModalVisible(true)
          saveUser(user.uid)
        })
        .catch(error => {
          const errorCode = error.code
          const errorMsg = error.message
          alert(errorMsg)
        })
    } else {
      alert('Passwords do not match')
    }
  }
  
  const saveUser = async (userId) => {
    await setDoc(doc(firestore, USER, userId), {
      name: name,
      email:email,
      username: username,
      isTutor: isTutor,
      favoriteSubjects: favoriteSubjects,
      profileDescription: profileDescription,
      photoURL: photoURL,
      tokens: 14
    }).catch(err => console.log(err))
  }        

  const close = () => {
    setModalVisible(false)
    navigation.navigate('Login')
  }
  
  const toggleIsTutor = () => {
    setIsTutor(!isTutor)
  }
  
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


  return (
    <SafeAreaView style={signUpStyles.container}>
      <Title/>
      <ScrollView contentContainerStyle={signUpStyles.signUpContainer} bounces={false}>
            <TextInput style={signUpStyles.inputField} 
            placeholder='Name' 
            value={name}
            onChangeText={text => setName(text)}
            />
            <TextInput style={signUpStyles.inputField} 
            placeholder='Email'
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <TextInput style={signUpStyles.inputField}
            placeholder='Username'
            value={username}
            onChangeText={text => setUsername(text)}
            />
            <TextInput style={signUpStyles.inputField}
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            />
            <TextInput style={signUpStyles.inputField} 
            placeholder='Re-enter password'
            secureTextEntry={true}
            value={comparePassword}
            onChangeText={text => setComparePassword(text)}
            />
            <View style={signUpStyles.isTutorContainer}>
              <Text style={[signUpStyles.label, {fontSize: 24, marginBottom: 0}]}>Make me a tutor</Text>
              <Switch 
                trackColor={{ false: '#eca04d', true: '#0c0275'}}
                thumbColor={isTutor ? '#eca04d' : '#f21e0f'}
                ios_backgroundColor='#423d3d'
                onValueChange={toggleIsTutor}
                value={isTutor}
              />
            </View>
            <Text style={signUpStyles.label}>Favorite subjects</Text>
            <View style={signUpStyles.buttonContainer}>
            <SubjectChoicePanel favoriteSubjects={favoriteSubjects} setFavoriteSubjects={setFavoriteSubjects}/>
            </View>
            <View style={signUpStyles.container}>
            <View style={SignUpStyles.ProfilepicView}>
              <TouchableOpacity onPress={OpenImagePicker} > 
                <View style={SignUpStyles.profileCircle}>
                  <Image source={ {uri: photoURL}} style={SignUpStyles.profilePic} />
                </View>
                <Text style={signUpStyles.profileText}>Choose profile picture</Text>
              </TouchableOpacity>
            </View>
            </View>
            <ProfileDescription setProfileDescription={setProfileDescription}/>
            <Pressable onPress={createAccount}>
            {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
            </Pressable>
        </ScrollView>
        
        
        <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose={close}
        >
            <View style={signUpStyles.modalContainer}>
                <View style={signUpStyles.modalView}>
                    <Text>Account created succesfully!</Text>
                    <Button title='Go to login' onPress={close} />
                </View>
            </View>
        </Modal>
    </SafeAreaView>
  )
}  




