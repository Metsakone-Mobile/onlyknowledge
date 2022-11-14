import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
      },
      mainTitle: {
          marginTop: 50,
          fontSize: 36,
      },  
        label: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileCircle: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center'
      },
      profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
      },
      placeHolder:{
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',

    },
      textInput:{
        borderColor: "gray",
        width: "80%",
        height: "200%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
       
        
    
      }
})