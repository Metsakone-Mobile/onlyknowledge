import React,{useState} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default function Search({executeSearch}) {

const [search, setSearch] = useState ('')

  return (
    <View style={styles.searchBox}>
        <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder="Search..."
        returnKeyType="search"
        onSubmitEditing={() => executeSearch(search)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBox:{
        width: "75%",
        borderWidth: 1,
        padding: 5,
        backgroundColor: "white",
        opacity: 0.9,
        borderRadius:75,
        paddingBottom: 10,
    }
})
