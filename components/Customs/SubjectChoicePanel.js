import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SubjectChoicePanel({favoriteSubjects, setFavoriteSubjects}) { 

  const [subjects, setSubjects] = useState([
    {
      label: 'Math',
      value: 'Math',
      isChosen: false
    },
    {
      label: 'Physics',
      value: 'Physics',
      isChosen: false
    },
    {
      label: 'Biology',
      value: 'Biology',
      isChosen: false
    },
    {
      label: 'Chemistry',
      value: 'Chemistry',
      isChosen: false
    }
  ])

  const handlePress = (subject) => {

    let chosenSubjects = [...subjects]
    let chosenSubjectIndex = chosenSubjects.findIndex(chosenSubject => chosenSubject.value === subject.value)

    if(chosenSubjectIndex !== -1){
      let chosenFavorites = [...favoriteSubjects]
      let chosenSubject = {...chosenSubjects[chosenSubjectIndex]}

      chosenSubject.isChosen = !chosenSubject.isChosen
      chosenSubjects[chosenSubjectIndex] = chosenSubject
      setSubjects(chosenSubjects)

      if(chosenSubject.isChosen){
        chosenFavorites.push(chosenSubject.value)
        setFavoriteSubjects(chosenFavorites)
      } else if(!chosenSubject.isChosen){
        chosenFavorites = chosenFavorites.filter(favorite => favorite !== chosenSubject.value)
        setFavoriteSubjects(chosenFavorites)
      }
    }
  }

  return (
    <>
      {subjects.map((subject) => (
        <View key={subject.value} style={styles.subjectButtonContainer}>
            <Text style={styles.label}>{subject.label}</Text>
            <Pressable style={styles.unChecked} onPress={() => handlePress(subject)}>
                {subject.isChosen === true && handlePress && <View style={styles.checked} />}
            </Pressable>
        </View>
    ))}
    </>
  )
}

const styles = StyleSheet.create({
  subjectButtonContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 12,
  },
  unChecked: {
      height: 40,
      width: 40,
      borderRadius: '50%',
      borderWidth: 3,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e5e5e5'
  },
  checked: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: '#eca04d'
  },
  label: {
      marginTop: 5,
      fontSize: 24,
      color: '#000',
      fontWeight: 'bold',
  }
})