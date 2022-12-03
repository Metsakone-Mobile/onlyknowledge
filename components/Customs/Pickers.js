import { View, Text, Pressable, Button } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import { AuthContext } from '../../context/AuthContext';
import { firestore, setDoc, addDoc, doc, getDoc, QUESTIONS, USER, collection, SUBJECTS, database } from '../../firebase/Config'
import CustomButton from './Buttons/CustomButton';

export default function Pickers() {

const { loggedUserID } = useContext(AuthContext)
const [name, setName] = useState('')
const [subjects, setSubjects] = useState()


const getUserInfo = async () => {
    console.log(loggedUserID)
    const docRef = doc(firestore, USER, loggedUserID)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Doc data: ", docSnap.data())
      setName(docSnap.data().name)
      setSubjects(docSnap.data().favoriteSubjects)
      
    } else {
      console.log("Penus")
    }
  }

  

 

  useEffect(() => {
    getUserInfo()
  }, [])

  

  const saveSubjects= async () => {
    const docRef = addDoc(collection(firestore, "subject"), {
      subject: itemss,
      name: name,
      timestamp: Date()

    });
    }

  



  const [open, setOpen] = useState(false)

  //pickern alkuarvot (eli ei valintoja)

  const [value, setValue] = useState([]);


  //eri aihealueet 
  const [items, setItems] = useState([

    {label: 'Math', value: 'math'},
    {label: 'Physics', value: 'physics'},
    

    {label: 'Biology', value: 'biology'},
    {label: 'Chemistry', value: 'chemistry'},

  ]);

  //tallennetaan itemssiin valinnat, jotka savesubjectilla lähetetään firebaseen

  const [itemss, setItemss] = useState([
    {label: 'Luonnontieteet', value: 'luonnontieteet'},
  {label: 'Fysiikka', value: 'fysiikka'},
  

  {label: 'Tanssi', value: 'tanssi'},
  {label: 'Letkajenkka', value: 'letkajenkka'},]);

  //jätetään tyylittely toistaiseksi returnin sisään

  return (
    <View style={{
      
      
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>
      <DropDownPicker
        placeholder="Aihealueet"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51"]}
        onChangeValue={(value) => {
            setItemss(value);
          }} 
      />

<Pressable onPress={saveSubjects}>
        {(state) => <CustomButton pressed={state.pressed} buttonText={'Submit'} />}
      </Pressable>

      
    </View>
  )
}