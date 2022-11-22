import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:'100%'
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
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 40,
        padding: 15,
        fontSize: 20,
        
    
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
          },
})