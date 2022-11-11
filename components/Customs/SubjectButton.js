import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import subjectButtonStyles from './SubjectButtonStyles'

export default function SubjectButton({options, onPress}) { 

  const handlePress = (option) => {
    let chosenOptions = [...options]
    let chosenOptionIndex = chosenOptions.findIndex(chosen => chosen.value === option.value)

    if(chosenOptionIndex !== -1){
        let chosenOption = {...chosenOptions[chosenOptionIndex]}
        chosenOption.isChosen = !chosenOption.isChosen
        chosenOptions[chosenOptionIndex] = chosenOption
        onPress(chosenOptions)
    }
}
    
  

  return (
    <>
    {options.map((option) => (
        <View key={option.value} style={subjectButtonStyles.subjectButtonContainer}>
            <Text style={subjectButtonStyles.label}>{option.label}</Text>
            <Pressable style={subjectButtonStyles.unChecked} onPress={() => handlePress(option)}>
                {option.isChosen === true && handlePress && <View style={subjectButtonStyles.checked} />}
            </Pressable>
        </View>
    ))}
    </>

  )
}