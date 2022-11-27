import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    mainTitle:{
        fontSize: 20,
         marginTop: 20
    },
    innerContainer:{
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    inputField: {
        flexDirection: 'row',
            marginTop: 15,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5,
            width:'80%'
        
    
    },    
    profileContent: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        },
        profilePic:{
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            marginTop: 20,
          },
})