import { useState, useMemo} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'


/**
 * Componens displays radiobutton.
 * @param options Array containing displayed texts and values for radiobutton
 * @param onPress Used to forward selected value to the component using this radiobutton component --> (you need to be able to read radiobutton selection)
 */
export default function Radiobutton({subjects, onPress}) {

const data = useMemo(() => [
  {
    label: 'Math',
    value: 'Math',
    selected: subjects.includes('Math'),
  },
  {
    label: 'Physics',
    value: 'Physics',
    selected: subjects.includes('Physics'),

  },
  {
    label: 'Biology',
    value: 'Biology',
    selected: subjects.includes('Biology'),
  
  },
  {
    label: 'Chemistry',
    value: 'Chemistry',
    selected: subjects.includes('Chemistry'),
 
  }
], [subjects])

  

  //State variable for value of the radiobutton

/**
 * Function for handling radiobutton selection. State variable is updated and selection is forwarded
 * the component that is using this Radiobutton component is using onPress- props.
 * @param selectedValue of the radiobutton.
 */


const handleRadiobuttonPress =(selectedValue)=> {
    onPress(selectedValue);
}
  return (
    <>
    {

        data.map((subject) =>(
        <View key={subject.value} style={styles.buttonContainer}>{/* one option at a time */}
          <Text style={styles.label}>{subject.label}</Text>
          <Pressable style={styles.circle} onPress= {()=> handleRadiobuttonPress(subject.value)}>
            {subject.selected && <View style={styles.checkedCircle}/>}
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
  