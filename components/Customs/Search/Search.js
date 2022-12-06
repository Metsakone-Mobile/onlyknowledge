import React,{useState} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default function Search({executeSearch}) {

const [search, setSearch] = useState ('')

  return (
    
        <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder="Search..."
        returnKeyType="search"
        onSelectionChange={() => executeSearch(search)}
        />
    
  )
}

