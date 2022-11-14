import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import subjectButtonStyles from './SubjectButtonStyles'

export default function SubjectButton({favoriteSubjects, setFavoriteSubjects}) { 

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
        console.log('chosen favorites with addition: ', chosenFavorites)
      } else if(!chosenSubject.isChosen){
        chosenFavorites = chosenFavorites.filter(favorite => favorite !== chosenSubject.value)
        setFavoriteSubjects(chosenFavorites)
        console.log('chosen favorites with reduction: ', chosenFavorites)
      }
    }
  }

  return (
    <>
      {subjects.map((subject) => (
        <View key={subject.value} style={subjectButtonStyles.subjectButtonContainer}>
            <Text style={subjectButtonStyles.label}>{subject.label}</Text>
            <Pressable style={subjectButtonStyles.unChecked} onPress={() => handlePress(subject)}>
                {subject.isChosen === true && handlePress && <View style={subjectButtonStyles.checked} />}
            </Pressable>
        </View>
    ))}
    </>
  )
}
