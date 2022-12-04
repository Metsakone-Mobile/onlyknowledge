import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'


/**
 * Componens displays radiobutton.
 * @param options Array containing displayed texts and values for radiobutton
 * @param onPress Used to forward selected value to the component using this radiobutton component --> (you need to be able to read radiobutton selection)
 */
export default function Radiobutton({favoriteSubjects, onPress}) {

  //State variable for value of the radiobutton
const [value, setValue] = useState(null)

/**
 * Function for handling radiobutton selection. State variable is updated and selection is forwarded
 * the component that is using this Radiobutton component is using onPress- props.
 * @param selectedValue of the radiobutton.
 */


const handleRadiobuttonPress =(selectedValue)=> {
    setValue(selectedValue);
    onPress(selectedValue);
}
  return (
    <>
    {
      favoriteSubjects.map((subject)=> (
        <View key={subject} style={styles.buttonContainer}>{/* one option at a time */}
          <Text style={styles.label}>{subject.label}</Text>
          <Pressable style={styles.circle} onPress= {()=> handleRadiobuttonPress(subject.value)}>
            {value === subject.value && <View style={styles.checkedCircle}/>}
          </Pressable>
        


        </View>
      ))
    }
    </>
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginbottom:30,
    },
    label: {
        marginRight:10,
    },
    circle: {
        height: 28,
        width:28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems:'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }
  });
  