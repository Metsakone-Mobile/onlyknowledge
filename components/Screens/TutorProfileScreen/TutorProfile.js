import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useFocusEffect} from '@react-navigation/native'
import { firestore, collection, query, where, getDocs, USER, doc, getDoc  } from '../../../firebase/Config'
import { AuthContext } from '../../../context/AuthContext'
import { findATutorStyles } from '../FindATutorScreen/FindATutorStyles'
import Circles from '../../Customs/Decoratives/Circles'


import Search from '../../Customs/Search/Search'





export default function TutorProfile({navigation}) {

  
  return (
    
      
    <View style={findATutorStyles.container}>
    <Circles />
      TERSE TERSE
    </View>
      )


          }

